const categoryService = require('../services/categoryService');

const postCategory = async (req, res) => {
  try {
    const { dataValues } = await categoryService.postCategory(req.body);
    return res.status(201).json(dataValues);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getCategories = async (_req, res) => {
  try {
    const { dataValues } = await categoryService.getCategories();
    return res.status(200).json(dataValues);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { postCategory, getCategories };