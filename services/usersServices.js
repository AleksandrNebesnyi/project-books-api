const { User } = require('../models/userSchema');
const { v4: uuidv4 } = require('uuid');


// Создает нового юзера в базе
const createUser = async body => {
  const verificationToken = uuidv4();
  const user = await new User({ ...body, verificationToken });
  user.setPassword(body.password);
  return user.save();
};
// Находит юзера в базе по id
const findUserById = async id => {
  const user = await User.findById(id);
  return user;
};

// Находит юзера в базе по email
const findUserByEmail = async email => {
  const user = await User.findOne({ email });
  return user;
};

// Обновляет токен юзера
const updateToken = async (id, token) => {
  await User.updateOne({ _id: id }, { token });
};

module.exports = {
  createUser,
  findUserById,
  findUserByEmail,
  updateToken,
};
