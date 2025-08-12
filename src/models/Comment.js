import { Schema, model, Types } from 'mongoose'


const commentSchema = new Schema({

    name: {
        type: String,
        required: true,
        minLength:5
    },
    email: {
        type: String,
        required: true,
        minLength: 5
    },
    message: {
        type:String,
        required: true,
        minLength: 6
    },
    likedList: [{
        type: Types.ObjectId,
        ref:'User'
    }],
    owner: {
        type: Types.ObjectId,
        ref:'User'
    },
    post: {
        type: Types.ObjectId,
        ref: 'Post'
    },
    created_at: {
        type: Date,
        default: Date.now
    }

})

const Comment = new model('Comment', commentSchema)

export default Comment