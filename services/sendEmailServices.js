const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);





// const getVerificationUrl = (baseRoutePath, verificationToken) =>
//   `${process.env.FRONTEND_URL}${baseRoutePath}/verify/${verificationToken}`;

// const sendVerificationEmail = async (to, baseRoutePath, verificationToken) => {
//   const verificationUrl = getVerificationUrl(baseRoutePath, verificationToken);
//   const msg = {
//     to,
//     from: process.env.SENDGRID_SENDER,
//     subject: '[Book Reading Service] Підтвердження реєстрації',
//     text: `Вітаємо! Ви зареєструвались у додатку Books Reading. Перейдіть, будь ласка, за ${verificationUrl} посиланням для верифікації вашої пошти. Ставте цілі і досягайте їх! Ви все зможете:-)`,
//     html: `<table
//     align="center"
//     border="0"
//     cellpadding="0"
//     cellspacing="0"
//     width="100%"
//     style="padding: 0 0px; margin: 0 auto; background-color: #F6F7FB; max-width: 680px; width: 100%;"
//   >
//     <tbody>
//       <tr>
//         <td style="text-align: center; padding: 24px 60px 0;">
//           <p style="text-align: center; font-size: 40px; line-height: 48px; margin: 0 auto; color: #ff6b08; width: 100%;">
//             Вітаємо!
//           </p>
//         </td>
//       </tr>
//       <tr>
//         <td style="padding: 6px 32px 0;">
//           <p style="text-align: center; font-size: 16px; line-height: 24px; margin: 0 auto; width: 100%; max-width: 418px; font-weight: 400;">
//             Ви зареєструвались у додатку Books Reading. Перейдіть, будь ласка,
//             за посиланням для верифікації вашої пошти.
//           </p>
//         </td>
//       </tr>
//             <tr>
//         <td style="text-align: center; padding: 24px 60px 0;">
//           <a
//             href="${verificationUrl}"
//             style="text-align: center; font-size: 15px; margin: 0 auto; color: #ffffff; text-decoration: none; width: 100%; background-color: #ff6b08; border-radius: 7px; padding: 10px 17px; box-shadow:0px 2px 4px rgba(0, 0, 0, 0.25);"
//           >
//             Підтвердити реєстрацію
//           </a>
//         </td>
//       </tr>
//       <tr>
//         <td style="text-align: center; padding: 24px 60px 0;">
//         <p style="text-align: center; font-size: 22px; line-height: 29px; margin: 0 auto; width: 100%; padding-bottom: 20px;">
//         Ставте цілі і досягайте їх! <br />
//         Ви все зможете :-)
//       </p>
//         </td>
//       </tr>
//     </tbody>
//   </table>`,
  
//   };

//   return await sendEmailWithControl(msg);
// };