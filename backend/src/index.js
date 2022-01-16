const { ApolloServer, gql } = require('apollo-server');
const { MongoClient, ObjectId } = require('mongodb');

const bcrpyt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const { DB_URI, DB_NAME, JWT_SECRET } = process.env;

const getToken = (user) => jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '30 days' });

const getUserFromToken = async (token, db) => {
    if (!token) { return null }

    const tokenData = jwt.verify(token, JWTSECRET);
    if (!tokenData.id) { return null }
    return await db.collection('User').findOne({ _id: ObjectId(tokenData.id) });
}

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
  }

  type AuthUser {
    user: User!
    token: String!
  }

  type Query {
    authUser: User!
  }

  type Mutation {
    signUp(email: String!, password: String!): AuthUser!
    signIn(email: String!, password: String!): AuthUser!
  }
`;

const resolvers = {
    Query: {
        authUser: async (_, __, { db, user }) => {
            return await db.collection('User').findOne({ _id: user._id });
        }
    },
    Mutation: {
        signUp: async (_, { email, password }, { db }) => {
            const hashedPassword = bcrpyt.hashSync(password);

            const newUser = {
                email,
                password: hashedPassword
            }

            const result = await db.collection('User').insertOne(newUser);
            const user = await db.collection('User').findOne({ _id: result.insertedId })
            console.log(user);

            return {
                user,
                token: getToken(user),
            }
        },
        signIn: async (_, { email, password }, { db }) => {
            const user = await db.collection('User').findOne({ email: email });
            const isPasswordCorrect = user && bcrpyt.compareSync(password, user.password);
            if (!user || !isPasswordCorrect) { throw new Error('Invalid credentials or user does not exist') }

            return {
                user,
                token: getToken(user),
            }
        }
    },
    User: {
        id: ({ _id, id }) => _id || id,
    }
};

const start = async () => {
    const client = new MongoClient(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const db = client.db(DB_NAME);

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: async ({ req }) => {
            const user = await getUserFromToken(req.headers.authorization, db);
            return {
                db,
                user,
            }
        },
    });
    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
    });

}

start();