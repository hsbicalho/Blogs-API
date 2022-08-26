const { Category } = require('../database/models');

const postCategory = async ({ name }) => {
  const { dataValues } = await Category.create({ name });
  return { dataValues };
};

module.exports = { postCategory };