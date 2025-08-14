import { Schema, model, Types } from 'mongoose'

const podcastSchema = new Schema({
    image:{
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    URL: {
        type: String,
        required: true
    },
    VotesList: [{
        type: Types.ObjectId,
        ref: 'User'
    }]
})

const Podcast = new model('Podcast', podcastSchema)

export default Podcast