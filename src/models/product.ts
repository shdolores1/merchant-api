import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
	image: {
		type: String,
		required: false
	},
	name: {
		type: String,
		required: true
	},
	quantity: {
		type: Number,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	productDetails: {
		type: String,
		required: true
	},
	isDeleted: {
		type: Boolean,
		default: false,
		required: true
	}
},
	{
		timestamps: true
	}
);

const Product = mongoose.model("Product", ProductSchema);
export { Product }
