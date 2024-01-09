import mongoose from "mongoose";

const subTodoSchema = new mongoose({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

export const subTodo = mongoose.model('SubTodo', subTodoSchema)

// In MongoDb "User" is stored as "users" --> Plural and all smallcase