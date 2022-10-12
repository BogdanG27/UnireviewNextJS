import mongoose, { Document } from 'mongoose';

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
	author: {
		type: String,
		required: true
	},
	stars: {
		type: Number,
		required: true
	},
	description: {
		type: String,
		required: false
	}
});

export interface IReview extends Document {
	author: string,
	stars: number,
	description?: string
}

export default mongoose.model<IReview>("Review", reviewSchema);