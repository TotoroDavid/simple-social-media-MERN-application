/* eslint-disable import/no-anonymous-default-export */
/**
 * reducers redux
 */

export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return posts
        case 'CREATE':
            return [...posts, action.payload]
        default:
            return posts
    }
}