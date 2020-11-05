const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail
  .send({
    to: "Facundo Cachan",
    from: "yo@facundo-cachan.com",
    subject: "Desde Mi CV en la web",
    text: "Recibi tu email, gracias",
    html: "<strong>Recibi tu email, gracias</strong>",
  })
  .then(() => {
    console.log("Mensaje enviado!!!");
  })
  .catch(error => {
    console.error(error);
  });
