const UserService = require('../services/userService');

const postUser = async (req, res) => {
  try {
    const token = await UserService.postUser(req.body);
    return res.status(201).json({ token });
  } catch (error) {
    if (error.message === 'User already registered') {
        return res.status(409).json({ message: error.message }); 
}
    return res.status(500).json({ message: error.message });
  }
};
const getAllUsers = async (_req, res) => {
  try {
    const AllUsers = await UserService.getAllUsers();
    return res.status(200).json(AllUsers);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await UserService.getById(req.params);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = { postUser, getAllUsers, getUserById };