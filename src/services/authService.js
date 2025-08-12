import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import brcrypt from 'bcrypt'

const authService = {

    async register(username, email, tel, password, rePassword){
        // Check for password mismatch
        if (password !== rePassword) {
            throw new Error('Passwords do not match!')
        }

        // Verify if user exists in database
        const user = await User.findOne({ $or: [{email},{username}]}).lean()
        // we query the MongoDB collection using the User mongoose model 
        // to find the fist document that matches the given condition
        // The query searches for a user whose email matches email OR whose username matches username
        // .lean() - converts the result from a Mongoose document to a plain Javascript object

        if (user) {
            throw new Error('User already exists!')
        }
        // Save to DB
        const newUser = await User.create({username, email,tel, password})
        
        return newUser
        
    },

    async login(email,password){
        // Verify if user is already registered:
            console.log('We are inside authService login method')
            const registeredUser = await User.findOne({email})

            if (!registeredUser) {
                throw new Error('User is not registered!')
            }
            
            // Validate hashed password

            const hashedPass = registeredUser.password
            const isValid = await brcrypt.compare(password, hashedPass)

            if (!isValid) {
                throw new Error('Password is not valid!')
            }

            // generate token

            return registeredUser
    },

    async user(userId){

        const user = User.findById(userId).lean()

        return user

    },

    async generateToken(user){

        const payload = {
            email: user.email,
            username: user.username,
            _id: user._id
        }

        

        const jwt_token = await jwt.sign(payload,process.env.SECRET,{'expiresIn': '2hr'})
        
        return jwt_token

    }
}

export default authService