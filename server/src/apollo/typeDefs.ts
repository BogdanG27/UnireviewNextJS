import { gql } from 'apollo-server-express';

export const typeDefs = gql`
	type University {
		id: ID!
		name: String!
		city: String!
	}

	type Query {
		universities: [University!]!
	}

	type Mutation {
		createUniversity(name: String!, city: String!): University!
	}
`;