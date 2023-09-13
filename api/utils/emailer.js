const nodemailer = require("nodemailer");
const { htmlTemplate } = require("./sendImage");

const createTrans = () => {
  const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "89184a67342aaa",
      pass: "9e01d3bec78a5e",
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
