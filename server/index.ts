import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from './src/config/db';
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from './src/apollo/typeDefs';
import { resolvers } from './src/apollo/resolvers';

const startServer = async () => {
	const app = express();
	dotenv.config();

	const server = new ApolloServer({
		typeDefs,
		resolvers,
	});
	await server.start();
	server.applyMiddleware({ app });

	connectDB();

	app.use(cors());

	const PORT = process.env.PORT;

	app.listen(PORT, () =>
		console.log(`Server started on port http://localhost:${PORT}${server.graphqlPath}`)
	);

};

startServer();