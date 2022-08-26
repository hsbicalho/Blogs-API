const { BlogPost, PostCategory, Category, sequelize, User } = require('../database/models');

const getUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  const { id } = user;
  return id;
};
const createPost = async ({ title, content, categoryIds, email }) => {
  const userId = await getUser(email);
  const { data } = await sequelize.transaction(async (transaction) => {
    const { count } = await Category.findAndCountAll({ where: { id: categoryIds } });
    if (count < categoryIds.length) {
      throw new Error('"categoryIds" not found');
    }
    const { dataValues } = await BlogPost.create(
      { title, content, userId },
      { transaction },
    );
    console.log(dataValues);
    const postsCategories = categoryIds.map((number) => ({
      postId: dataValues.id, categoryId: number,
    }));
    await PostCategory.bulkCreate(postsCategories, { transaction });
    return { data: dataValues };
  });
  return { data };
};

module.exports = { createPost };
