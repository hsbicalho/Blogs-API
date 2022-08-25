const LoginService = require('../services/loginService');

const postLogin = async (req, res) => {
  try {
    const token = await LoginService(req.body);
    res.status(200).json({ token });
  } catch (error) {
    if (error.message === 'Invalid fields') return res.status(400).json({ message: error.message });
    return res.status(400).json({ message: error.message });
  }
};

module.exports = postLogin;