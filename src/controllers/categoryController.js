const categoryService = require('../services/categoryService');

const postCategory = async (req, res) => {
  try {
    const { dataValues } = await categoryService.postCategory(req.body);
    res.status(201).json(dataValues);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { postCategory };