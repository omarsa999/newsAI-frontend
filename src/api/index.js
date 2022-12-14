import axios from "axios"

// const url = 'http://localhost:5000/posts';

const url = "https://web-production-38f9.up.railway.app/posts"

export const fetchPosts = () => axios.get(url)
export const createPost = (newPost) => axios.post(url, newPost)
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost)
export const deletePost = (id) => axios.delete(`${url}/${id}`)
