const nodemailer = require("nodemailer");
const { htmlTemplate } = require("./sendImage");

const createTrans = () => {
  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "9f306df9e06651",
      pass: "c58c6576c2b1ed",
    },
  });
  return transport;
};

const sendMail = async (user) => {
  const transporter = createTrans();
  const info = await transporter.sendMail({
    from: '"Equipo Rincón Matero" <rinconmatero@argentina.com>',
    to: `${user.email}`,
    subject: `Hola ${user.name}`,
    html: htmlTemplate,
  });

  console.log("Message sent: %s", info.messageId);
  return;
};

exports.sendMail = (user) => sendMail(user);
