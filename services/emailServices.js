// Отправка письма через Sendgrid
const User = require('../models/userSchema');
const sendVerificationEmail = require('../helpers/sendEmail');

const verify = async verificationToken => {
  const user = await User.findOne({ verificationToken });
  if (user) {
    await User.findByIdAndUpdate(user._id, {
      verifyToken: null,
      verify: true,
    });
    return user.email;
  }
};

// Повторно верифицирует юзера
const resendVerify = async (email, baseUrl) => {
  const user = await User.findOne({ email, verify: false });

  if(!user){
    throw new Error(
      `User with email '${email}' was not found. Please check email or sign up`,
    );
  }

    await sendVerificationEmail(email,baseUrl,user.verificationToken);
    return user.email;
  };

module.exports = { verify, resendVerify };