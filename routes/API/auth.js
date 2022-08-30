const express = require('express');
const router = express.Router();
const { joiSchema, joiSignUpSchema, joiSchemaResendVerifyUser } = require('../../models/userSchema');

const validation = require('../../middlewares/validation');
const {
  register,
  loginUser,
  logoutUser,
  currentUser,
  verifyUser,
  resendVerifyUser
} = require('../../controllers/auth');
const { googleAuth, googleRedirect } = require('../../controllers/googleAuth');
const tryCatchMiddleware = require('../../middlewares/tryCatch');
const auth = require('../../middlewares/auth');

router.post('/signup', async (req, res) => {
  const validationResult = joiSignUpSchema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).json({
      status: '400 Bad Request',
      responseBody: `${validationResult.error}`,
    });
  }
  const newUser = await register(req, res);
  res.status(201).json({
    Status: '201 Created',
    ResponseBody: {
      user: {
        name: newUser.name,
        email: newUser.email,
      },
    },
  });
});
router.post('/login', validation(joiSchema), tryCatchMiddleware(loginUser)); // Роут для входа юзера
router.get('/current', auth, tryCatchMiddleware(currentUser)); // Роут для получения текущего юзера
router.post('/logout', auth, tryCatchMiddleware(logoutUser)); // Роут для выхода
router.get('/google', tryCatchMiddleware(googleAuth));
router.get('/google-redirect', tryCatchMiddleware(googleRedirect));
router.get('/verify/:verificationToken', tryCatchMiddleware(verifyUser)); // Верификация юзера
router.post('/verify',validation(joiSchemaResendVerifyUser),tryCatchMiddleware(resendVerifyUser),); // Запрос повторной верификации юзера

module.exports = router;
