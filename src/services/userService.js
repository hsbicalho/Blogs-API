const createToken = require('./createToken');
const { User } = require('../database/models');

const postUser = async ({ displayName, email, password, image }) => {
  const findUser = await User.findOne({ where: { email } });
  if (findUser) throw new Error('User already registered');
  const token = createToken(email);
  await User.create({ displayName, email, password, image });
  return token;
};

module.exports = { postUser };