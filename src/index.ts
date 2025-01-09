import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { resolvers, typeDefs } from './schema';

const startServer = async () => {
    const server = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers
    });

    await server.start();

    const app = express();
    app.use(express.json());

    app.use('/graphql', expressMiddleware(server));

    app.listen(4000, () => {
        console.log(' Server ready at http://localhost:4000/graphql');
    });
};

startServer().catch((err) => {
    console.error('Error starting server:', err);
});