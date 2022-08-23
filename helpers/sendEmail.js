const sgMail = require('@sendgrid/mail');
// const nodemailer = require('nodemailer');

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async data => {
  try {
    const email = { ...data, from: 'a.nebesnyi@gmail.com' };
    sgMail.send(email);
    console.log('Mail send');
  } catch (error) {
    throw new Error(error);
  }
};

// Отправка письма через Gmail

// const { GMAIL_PASS } = process.env;

// const nodemailerConfig = {
//   service: 'gmail',
//   auth: {
//     user: 'a.nebesnyi@gmail.com',
//     pass: GMAIL_PASS,
//   },
// };
// const transporter = nodemailer.createTransport(nodemailerConfig);

// const sendEmail = async data => {
//   const mail = { ...data, from: 'a.nebesnyi@gmail.com' };

//   try {
//     await transporter.sendMail(mail);
//   } catch (error) {
//     throw new Error(`Smth wrong with email service: ${error.message}`);
//   }
// };

module.exports = sendEmail;