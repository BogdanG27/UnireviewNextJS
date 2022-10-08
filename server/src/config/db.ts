import mongoose from "mongoose";

const connectDB = async () => {
	try {
		mongoose.connect(process.env.MONGO_URL!);
	} catch (error) {
		console.log("Connection error");
	}
	const connection = mongoose.connection;

	if (connection.readyState >= 1) {
		console.log("Connected to tha database");
		return;
	}

	connection.on("error", () => console.log("Connection to the database failed"));
};

export default connectDB;