//const router = require('express').Router();
import { Router } from 'express'
import postController from './src/controllers/postController.js'
import authController from './src/controllers/authController.js'
import podcastController from './src/controllers/podcastController.js'

const routes = Router()

routes.use(postController)
routes.use(podcastController)
routes.use('/users', authController)


// Require Controllers


export default routes