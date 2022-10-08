import mongoose, { Document } from 'mongoose';

const Schema = mongoose.Schema;

const universitySchema = new Schema({
	name: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
});

export interface IUniversity extends Document {
	name: string,
	city: string,
}

export default mongoose.model<IUniversity>("University", universitySchema);