const sgMail = require('@sendgrid/mail');
// const nodemailer = require('nodemailer');

const { SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async msg => {
  console.log(msg);
  try {
    const sendedMessage = await sgMail.send(msg);
    console.log('Mail send');
    return sendedMessage[0].statusCode;
    // const email = { ...data, from: 'a.nebesnyi@gmail.com' };
    // sgMail.send(email);
    
  } catch (error) {
    throw new Error(error.message);
  }
};
// const retrySendEmail = (sendMailFunction, count = 2, interval = 20) => {
//   setTimeout(async () => {
//     const status = await sendMailFunction();
//     if (!status && count - 1) {
//       retrySendEmail(sendMailFunction, count - 1);
//       return;
//     }
//     return status;
//   }, interval * 1000);
// };

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

const getVerificationUrl = (baseRoutePath, verificationToken) =>
  `${process.env.FRONTEND_URL}${baseRoutePath}/verify/${verificationToken}`;


const sendVerificationEmail = async (to, baseRoutePath, verificationToken) => {
  
  const verificationUrl = getVerificationUrl(baseRoutePath, verificationToken);
  // console.log(verificationUrl);
  const msg = {
    to,
    from: process.env.SENDGRID_SENDER,
    subject: '[Book Reading Service] Підтвердження реєстрації',
    text: `Вітаємо! Ви зареєструвались у додатку Books Reading. Перейдіть, будь ласка, за ${verificationUrl} посиланням для верифікації вашої пошти. Ставте цілі і досягайте їх! Ви все зможете:-)`,
    html: `<table
    align="center"
    border="0"
    cellpadding="0"
    cellspacing="0"
    width="100%"
    style="padding: 0 0px; margin: 0 auto; background-color: #F6F7FB; max-width: 680px; width: 100%;"
  >
    <tbody>
      <tr>
        <td style="text-align: center; padding: 24px 60px 0;">
          <p style="text-align: center; font-size: 40px; line-height: 48px; margin: 0 auto; color: #ff6b08; width: 100%;">
            Вітаємо!
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding: 6px 32px 0;">
          <p style="text-align: center; font-size: 16px; line-height: 24px; margin: 0 auto; width: 100%; max-width: 418px; font-weight: 400;">
            Ви зареєструвались у додатку Books Reading. Перейдіть, будь ласка,
            за посиланням для верифікації вашої пошти.
          </p>
        </td>
      </tr>
            <tr>
        <td style="text-align: center; padding: 24px 60px 0;">
          <a
            href="${verificationUrl}"
            style="text-align: center; font-size: 15px; margin: 0 auto; color: #ffffff; text-decoration: none; width: 100%; background-color: #ff6b08; border-radius: 7px; padding: 10px 17px; box-shadow:0px 2px 4px rgba(0, 0, 0, 0.25);"
          >
            Підтвердити реєстрацію
          </a>
        </td>
      </tr>
      <tr>
        <td style="text-align: center; padding: 24px 60px 0;">
        <p style="text-align: center; font-size: 22px; line-height: 29px; margin: 0 auto; width: 100%; padding-bottom: 20px;">
        Ставте цілі і досягайте їх! <br />
        Ви все зможете :-)
      </p>
        </td>
      </tr>
    </tbody>
  </table>`,
 
  };

  return await sendEmail(msg);
};

module.exports = sendVerificationEmail;