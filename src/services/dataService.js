import Post from '../models/Post.js'
import Comment from '../models/Comment.js'
import Podcast from '../models/Podcast.js'

const dataService = {

async getPosts(){
    // find the Posts collection from DB
    // find all documents
    const posts = await Post.find({}).lean()
    // return the posts
    return posts
},


async createPost(theme,title,description,image, userId){

    const data = { theme,title,description, image}

    return await Post.create({...data, owner: userId})

},


async postDetails(id){

    const post = Post.findById(id).lean()

    console.log('Post from Back-End is:', post)

    return post
   
},

likePost(postId, userId){

  //  return Post.findByIdAndUpdate({_id: postId}, { $push: {likedList: userId}})
},

async deletePost(postId){
   
    return await Post.deleteOne({_id: postId})

},

async editPost(postId, post){

   // return Post.findByIdAndUpdate(postId,post)
},

async createPostComment(email, message, name, commentOwner, postId){

    const data = { email, message, name }

    return await Comment.create({...data,owner: commentOwner, post: postId})

},

async editPost(content, image, theme, title, postId){

   return await Post.updateOne({_id: postId}, {
        theme:theme,
        title: title,
        description: content,
        image: image
    })

},


async getPostComments(postId,userId){

   const postComments = await Comment.find({post: postId}).lean()

    if (!postComments) {
        throw new Error(`No comments for Post ${postId}`)
    }

    const filteredComments = postComments.map(comment => ({
        ...comment,
        likedByCurrentUser: comment.likedList.some(id => id.toString() === userId)
    }))

    return filteredComments

},

async likeComment(commentId, userId){

    const isPostLiked = await Comment.findOne({
        _id: commentId,
        likedList: userId
    })
        
    if (isPostLiked) {
        throw new Error(`User ${userId} has already liked comment ${commentId}`)  
    } else{
        await Comment.findByIdAndUpdate({_id:commentId}, { $push: {likedList: userId}})
    }

    
    
},

async getPodcasts(){

    const podcasts = await Podcast.find({}).lean()

    return podcasts

},

async votePodcast(podcastId, userId){
    console.log('PodcastID is: ', podcastId)
    await Podcast.findByIdAndUpdate(podcastId, { $push: {VotesList: userId}}, {new: true, upsert: false, strict: false})

},

async likePost(postId,userId){

    const isPostLiked = await Post.findOne({
        _id: postId,
        likedList: userId
    }).lean()
    console.log('Post is:', isPostLiked)

    if (isPostLiked) {
        throw new Error(`User ${userId} has already liked this Post`)
    }else{
        await Post.findByIdAndUpdate(postId,{ $push: {likedList: userId}})
    }   

},

async getPostLike(userId){

    const post = await Post.findOne({
        likedList: userId
    })

    return post
},


}

export default dataService