import University from "../models/University";

export const resolvers = {
	Query: {
		universities: async () => await University.find({}),
	},

	Mutation: {
		createUniversity: async (_: any, { name, city }: { name: string, city: string; }) => {
			const uni = new University({ name, city });
			await uni.save();
			return uni;
		}
	}
};