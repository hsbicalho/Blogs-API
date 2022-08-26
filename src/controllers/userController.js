const UserService = require('../services/userService');

const postUser = async (req, res) => {
  try {
    const token = await UserService.postUser(req.body);
    return res.status(200).json({ token });
  } catch (error) {
    if (error.message === 'User already registered') {
        return res.status(400).json({ message: error.message }); 
}
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { postUser };