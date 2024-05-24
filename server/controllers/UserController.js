// @desc Get all users
// @route GET /api/v1/users
// @access public
const getAllUsers = (req, res) => {
  res.json({ message: "Get All users" });
};

// @desc Get user by ID
// @route GET /api/v1/users/:id
// @access public
const getUserById = (req, res) => {
  res.json({ message: `Get user with ID: ${req.params.id}` });
};

// @desc create new user
// @route POST /api/v1/users
// @access public
const createUser = (req, res) => {
  res.json({ message: "Create user" });
};

// @desc Update user
// @route PUT /api/v1/users/:id
// @access public
const updateUser = (req, res) => {
  res.json({ message: `Update User with ID: ${req.params.id}` });
};

// @desc Delete user
// @route DELETE /api/v1/users
// @access public
const deleteUser = (req, res) => {
  res.json({ message: `Delete User with ID: ${req.params.id}` });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
