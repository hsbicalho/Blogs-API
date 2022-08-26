const createToken = require('./createToken');
const { User } = require('../database/models');

const postLogin = async ({ email, password }) => {
  const findUser = await User.findOne({ where: { email } });
  if (!findUser) throw new Error('Invalid fields');
  if (findUser.dataValues.password !== password) throw new Error('Invalid fields');
  const token = createToken(email);
  return token;
};

module.exports = postLogin;