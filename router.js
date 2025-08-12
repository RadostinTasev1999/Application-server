//const router = require('express').Router();
import { Router } from 'express'
import postController from './src/controllers/postController.js'
import authController from './src/controllers/authController.js'

const routes = Router()

routes.use(postController)
routes.use('/users', authController)


// Require Controllers


export default routes