import { Router } from 'express'
import dataService from '../services/dataService.js'
import getErrorMessage from '../utils/util.js'
import { get } from 'mongoose'

const router = Router()

router.get('/posts',async(request, response) => {
    // retrive posts from DB

    try {
        const posts = await dataService.getPosts()
        response.send(posts)
    } catch (error) {
        const err = getErrorMessage(error)
        response.send(err)
    }

})

router.get('/posts/:postId', async (request,response) => {
    
    const postId = request.params.postId

    try {
        const post = await dataService.postDetails(postId)
        response.send(post)
    } catch (error) {
        const err = getErrorMessage(error)
        response.send(err)
    }

})

router.get('/posts/:postId/comments',async (request,response) => {
    const postId = request.params.postId

    try {
        const postComments = await dataService.getPostComments(postId)
        response.send(postComments)
    } catch (error) {
        const err = getErrorMessage(error)
        response.send(err)
    }

})

router.post('/posts',async(request,response) => {
    
    const { theme,title,description,image,userId } = request.body    

    try {
        await dataService.createPost(theme,title,description,image,userId)
        return response.json({ message: 'Post successfully created!'})
    } catch (error) {
        const err = getErrorMessage(error)
        response.send(err)
    }

})

router.post('/posts/:postId/comments', async(request,response) => {

    const postId = request.params.postId
    const { email, message, name, commentOwnerId } = request.body

    try {
        await dataService.createPostComment(email, message, name, commentOwnerId, postId)
        return response.json({ message: 'Comment successfully created!' })
    } catch (error) {
        const err = getErrorMessage(error)
        response.send(err)
    }

})

router.delete('/posts/:postId',async(request, response) => {
    const postId = request.params.postId

    try {
        await dataService.deletePost(postId)
        return response.json({ message: 'Post successfully deleted!' })
    } catch (error) {
        const err = getErrorMessage(error)
        response.send(err)
    }

})

router.patch('/posts/:postId', async (request, response) => {
    const postId = request.params.postId

    const { content, image, theme, title } = request.body
    try {
        await dataService.editPost(content,image,theme,title,postId)
        return response.json({message: 'Post successfully edited!'})
    } catch (error) {
        const err = getErrorMessage(error)
        response.send(err)
    }
    


})

export default router