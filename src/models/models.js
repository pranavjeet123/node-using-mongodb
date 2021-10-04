import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a product name'
    },
    description: {
        type: String,
        required: 'Enter a product description'
    },
    category: {
        type: String,
        required: 'Enter a product category'
    },
    price: {
        type: String,
        required: 'Enter a product price'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});