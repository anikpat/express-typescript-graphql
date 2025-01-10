import { getDownloadLink } from "./service/report";


export const typeDefs = `
    type Query {
        # Hello
        hello: String!
        # Health check  
        healthCheck: String!
        # Get download link
        getDownloadLink: String!
    }
`;

export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello Life!';
        },
        healthCheck: () => {
            return 'OK';
        },
        getDownloadLink: async () => {
            const downloadUrl = await getDownloadLink('test');
            return downloadUrl;
        }
    }
};