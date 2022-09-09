const nodemailer = require("nodemailer");

const SendEmailUtility = async (name, email, EmailText, EmailSubject) => {
  let transporter = nodemailer.createTransport({
    host: "mail.amitjs.com",
    port: 587,
    secure: false,
    auth: {
      user: `${process.env.MAIL_USER}`,
      pass: `${process.env.MAIL_PASSWORD}`,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOption = {
    from: `${name} <${email}>`,
    to: "amitbd599@gmail.com",
    subject: EmailSubject,
    html: `<div>${EmailText}</div> <br/> <b>This Email Send From amitjs.com </b>`,
  };

  return await transporter.sendMail(mailOption);
};

module.exports = SendEmailUtility;
