import { Router } from "express";
import authService from '../services/authService.js'
import getErrorMessage from "../utils/util.js";

const router = Router()

// Post request from client:

router.post('/register',async (request,response) => {

    const {username, email, phonenumber, position, born, city, country, password, rePassword} = request.body

    try {
         const newUser = await authService.register(username,email,phonenumber,position,born,city,country,password,rePassword)
         const token = await authService.generateToken(newUser)
        // console.log('User registered!')
        response.cookie('auth',token, { httpOnly: true })
        response.send(newUser)
    } catch (error) {
        const err = getErrorMessage(error)
        response.send(err)
    }

})

router.post('/login', async(request, response) => {
    const { email, password } = request.body

    try {
         const registeredUser = await authService.login(email,password)
         const token = await authService.generateToken(registeredUser)
         response.cookie('auth',token, { httpOnly: true })
         response.send(registeredUser)
    } catch (error) {
        response.status(401).json({message: error.message})
    }
})

router.post('/logout', (request,response) => {
    response.clearCookie('auth')
    response.json({ message: 'User logged out!'})
})

router.get('/:userId',async(request,response) => {

    const userId = request.params.userId

    try {
        const user = await authService.user(userId)
        response.send(user)
    } catch (error) {
        const err = getErrorMessage(error)
        response.send(err)
    }

})


export default router