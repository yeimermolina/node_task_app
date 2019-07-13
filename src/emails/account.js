const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "yeimer.molina@gmail.com",
    subject: `Welcome ${name}!!`,
    text: "Super!!"
  });
};

module.exports = {
  sendWelcomeEmail
};
