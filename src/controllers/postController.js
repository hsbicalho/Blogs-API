const jwt = require('jsonwebtoken');
const PostService = require('../services/postService');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  try {
    const token = req.headers.authorization;
    const { email } = jwt.verify(token, process.env.JWT_SECRET);
    const post = await PostService.createPost({ title, content, categoryIds, email });
    return res.status(201).json(post.data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { createPost };