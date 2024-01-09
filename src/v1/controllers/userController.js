
const User = require('../models/User');


let users = [];


const getUsers = (req, res) => {
  res.json(users);
};


const getUserById = (req, res) => {
  const userId = req.params.id;
  const user = users.find((user) => user.id === parseInt(userId));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};


const createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = new User(users.length + 1, name, email);
  users.push(newUser);
  res.status(201).json(newUser);
};


const updateUser = (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  const userIndex = users.findIndex((user) => user.id === parseInt(userId));
  if (userIndex !== -1) {
    users[userIndex].name = name;
    users[userIndex].email = email;
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};


const deleteUser = (req, res) => {
  const userId = req.params.id;
  const userIndex = users.findIndex((user) => user.id === parseInt(userId));
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.json({ message: 'User deleted' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
