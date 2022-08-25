const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const secret = 'seusecretdetoken';

const postLogin = async ({ email, password }) => {
  const findUser = await User.findOne({ where: { email } });
  if (!findUser) throw new Error('Invalid fields');
  if (findUser.dataValues.password !== password) throw new Error('Invalid fields');
  const token = jwt.sign({ userId: findUser.id }, secret, { expiresIn: 86400 });
  return token;
};

module.exports = postLogin;