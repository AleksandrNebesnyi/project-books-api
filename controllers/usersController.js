const {findUserById} = require('../services/usersServices');

// Выход юзера
const logoutUser = async (req, res) => {
  const { id } = req.user;
  await logout(id);
  res.status(204).json({ message: 'No Content' });
};

// Текущий юзер
const currentUser = async (req, res) => {
  const currentUser = await findUserById(req.user.id);

  if (currentUser) {
    const { email, subscription } = currentUser;
    res.status(200).json({ email, subscription });
  }
};

module.exports = {
  logoutUser,
  currentUser,
};
