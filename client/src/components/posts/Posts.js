import React from 'react'
import { useSelector } from 'react-redux'
//component
import Post from './Post/Post'
//styles
import useStyles from './style'

const Posts = () => {

    const classes = useStyles()
    const posts = useSelector((state) => state.posts)

    console.log(posts)

    return (
        <div>
            <h1>posts</h1>
            <Post />
        </div>
    )
}

export default Posts
