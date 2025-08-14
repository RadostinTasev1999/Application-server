import { Router } from 'express';
import dataService from '../services/dataService.js'
import getErrorMessage from '../utils/util.js';

const router = Router()

router.get('/podcasts',async (request,response)=> {

    try {
        const podcastList = await dataService.getPodcasts()
        response.send(podcastList)
    } catch (error) {
        const err = getErrorMessage(error)
        response.send(err)
    }

})

router.post('/podcasts/:podcastId', async (request, response) => {
    const podcastId = request.params.podcastId
    const { userId } = request.body

    try {
        await dataService.votePodcast(podcastId, userId)
        response.send({message: `Podcast ${podcastId} successfully voted!`})
    } catch (error) {
        const err = getErrorMessage(error)
        response.send(err)
    }

})

export default router