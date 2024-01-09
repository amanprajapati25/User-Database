import mongoose from "mongoose";
const productCategorySchema = ({
    name: {
        type: String,
        required: true
    }
}, { timestamp: true })

export const productCategory = mongoose.model('productCategory', productCategorySchema)