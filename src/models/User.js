import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

const salt = 10;
const userSchema = new Schema({
    username:{
        type: String,
        requred: true,
        minLength:5,
    },
    email: {
        type: String,
        required: true,
        minLength: 10
    },
    phonenumber: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    born: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 5
    }
})

userSchema.pre('save', async function(){
    const plainPass = this.password
    const hashedPass = await bcrypt.hash(plainPass, salt)

    this.password = hashedPass
})

const User = new model('User', userSchema)

export default User