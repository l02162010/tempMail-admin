const mongoose = require('mongoose');
const Post = mongoose.model('Post');

/* Add Post */
// title
// description
// content
// author
const addPost = async ({title, description, content, author}) => {
  const res = await Post.create({
    title,
    description,
    content,
    author
  })
  return res
}

export {
  addPost
}