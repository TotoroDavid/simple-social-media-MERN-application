/**
 * handler controllers for our routes
 */

//mongoose schema
import mongoose from 'mongoose'
import PostMessage from '../models/postMessage.js'

/**get all the posts*/
export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find()

        console.log(postMessages)

        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

/** make a new post*/
export const createPost = async (req, res) => {
    const post = req.body

    const newPost = new PostMessage(post)

    try {
        await newPost.save()

        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

/**update the post */
export const updatePost = async (req, res) => {
    const { id: _id } = req.params
    const post = req.body

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that Id')

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true })

    res.json(updatedPost)
}

/**delete a post */
export const deletePost = async (req, res, next) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that Id')

    await PostMessage.findByIdAndRemove(id)
    res.json({ message: 'Post deleted successfully' })
}