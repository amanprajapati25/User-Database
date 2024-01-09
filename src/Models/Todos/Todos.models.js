import mongoose from "mongoose";
const todoSchema = new mongoose({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: true,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'subTodo'
        }
    ]  //Arrays of sub todos
}, { timestamps: true })

export const todo = mongoose.model('todo',todoSchema)