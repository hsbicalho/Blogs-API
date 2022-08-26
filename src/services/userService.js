const createToken = require('./createToken');
const { User } = require('../database/models');

const postUser = async ({ displayName, email, password, image }) => {
  const findUser = await User.findOne({ where: { email } });
  if (findUser) throw new Error('User already registered');
  const token = createToken(email);
  await User.create({ displayName, email, password, image });
  return token;
};

const getAllUsers = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });
  if (!allUsers) throw new Error('Users not found');
  return allUsers;
};

const getById = async ({ id }) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) throw new Error('User does not exist');
  return user;
};

module.exports = { postUser, getAllUsers, getById };