import { Schema, model, Types } from 'mongoose'

const postSchema = new Schema({
    theme: {
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true,
        minLength: 5
    },
    description: {
        type: String,
        required: true,
        minLength: 10
    },
    image: {
        type: String,
        required: true
    },
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    }
})

const Post = new model('Post', postSchema)

export default Post