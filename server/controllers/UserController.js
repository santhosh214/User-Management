const User = require("../models/userModel");

// @desc Get all users
// @route GET /api/v1/users
// @access public
const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

// @desc Get user by ID
// @route GET /api/v1/users/:id
// @access public
const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("User Not found");
  }
  res.status(200).json(user);
};

// @desc create new user
// @route POST /api/v1/users
// @access public
const createUser = async (req, res) => {
  // console.log(req.body);
  const { firstName, lastName, email, phone, userRole } = req.body;
  if (!firstName || !lastName || !email || !userRole) {
    res.status(400);
    throw new Error("Please provide the required details");
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    phone,
    userRole,
  });
  res.status(201).json(user);
};

// @desc Update user
// @route PUT /api/v1/users/:id
// @access public
const updateUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("User Not found");
  }
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedUser);
};

// @desc Delete user
// @route DELETE /api/v1/users
// @access public
const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("User Not found");
  }
  const deletedUser = await User.findByIdAndDelete(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(deletedUser);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
