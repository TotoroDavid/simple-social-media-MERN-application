/**
 * handler controllers for our routes
 */
import PostMessage from '../models/postMessage.js'

export const getPosts = (req, res) => {
    res.send('this works')
}

export const createPost = (req, res) => {
    res.send('post creation')
}