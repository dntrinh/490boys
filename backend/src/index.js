const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const express = require('express');
const http = require('http');
const { MongoClient, ObjectId } = require('mongodb');

const request = require('request');
const bcrpyt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const { DB_URI, DB_NAME, JWT_SECRET, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_CLIENT_CALLBACK } = process.env;

const getToken = (user) => jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '30 days' });

const getUserFromToken = async (token, db) => {
    if (!token) { return null }

    const tokenData = jwt.verify(token, JWTSECRET);
    if (!tokenData.id) { return null }
    return await db.collection('User').findOne({ _id: ObjectId(tokenData.id) });
}

var generateRandomString = function (length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
    bio: String
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

// async function startApolloServer(typeDefs, resolvers) {
//     const client = new MongoClient(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//     await client.connect();
//     const db = client.db(DB_NAME);

//     const app = express();
//     const httpServer = http.createServer(app);
//     const server = new ApolloServer({
//         typeDefs,
//         resolvers,
//         context: async ({ req }) => {
//             const user = await getUserFromToken(req.headers.authorization, db);
//             return {
//                 db,
//                 user,
//             }
//         },
//         plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
//     });

//     app.get('/login', (req, res) => {
//         var state = generateRandomString(16);
//         var scope = 'user-read-private user-read-email';
//         res.redirect('https://accounts.spotify.com/authorize?' +
//             querystring.stringify({
//                 response_type: 'code',
//                 client_id: SPOTIFY_CLIENT_ID,
//                 scope: scope,
//                 redirect_uri: redirect_uri,
//                 state: state
//             }));
//     })

//     await server.start();
//     server.applyMiddleware({ app });
//     await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
//     console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
// }

// startApolloServer();

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
    server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
    });

}

start();