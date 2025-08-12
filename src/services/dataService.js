import Post from '../models/Post.js'
import Comment from '../models/Comment.js'

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

    return await Comment.find({post:postId}).lean()

},

async likeComment(commentId, userId){

    await Comment.findByIdAndUpdate({_id:commentId}, { $push: {likedList: userId}})
    
}



}

export default dataService