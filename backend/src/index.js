const { ApolloServer, gql } = require('apollo-server');
const { MongoClient, ObjectId } = require('mongodb');

const bcrpyt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const { DB_URI, DB_NAME, JWTSECRET } = process.env;

const getToken = (user) => jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '30 days' });

const getUserFromToken = async (token, db) => {
    if (!token) { return null }

    const tokenData = jwt.verify(token, JWTSECRET);
    if (!tokenData.id) { return null }
    return await db.collection('User').findOne({ _id: ObjectId(tokenData.id) });
}

const typeDefs = gql`
  type User {
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
    signUp(input: SignUpInput!): AuthUser!
    login(input: LoginInput!): AuthUser!
  }

  input SignUpInput {
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }
`;

const resolvers = {
    Query: {
        books: () => books,
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
            return {
                db,
            }
        },
    });
    server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
    });

}

start();