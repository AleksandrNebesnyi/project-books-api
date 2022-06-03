const express = require('express');
const router = express.Router();

const tryCatchMiddleware = require('../../middlewares/tryCatch');
const {
  logoutUser,
  currentUser,
} = require('../../controllers/usersController');

// потрібен прошарок аутентифікації

router.post('/logout', authenticate, tryCatchMiddleware(logoutUser)); // Роут для выхода
router.get('/current', authenticate, tryCatchMiddleware(currentUser)); // Роут для получения текущего юзера
