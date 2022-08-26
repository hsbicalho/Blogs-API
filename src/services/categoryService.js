const { Category } = require('../database/models');

const postCategory = async ({ name }) => {
  const { dataValues } = await Category.create({ name });
  return { dataValues };
};
const getCategories = async () => {
  const dataValues = await Category.findAll();
  if (!dataValues) throw new Error();
  return { dataValues };
};
module.exports = { postCategory, getCategories };