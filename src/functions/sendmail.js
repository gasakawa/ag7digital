require('dotenv').config();
const sgMail = require('@sendgrid/mail');

exports.handler = async (event, context, callback) => {
  const { SENDGRID_API_KEY, SENDGRID_TO_EMAIL, SENDGRID_FROM_EMAIL } = process.env;
  const payload = JSON.parse(event.body);
  const { subject } = payload;

  sgMail.setApiKey(SENDGRID_API_KEY);

  const body = Object.keys(payload)
    .map(k => {
      return `${k}: ${payload[k]}`;
    })
    .join('<br><br>');

  const msg = {
    to: SENDGRID_TO_EMAIL,
    from: SENDGRID_FROM_EMAIL,
    subject: `Contacto página web -- ${subject}`,
    html: body,
  };

  try {
    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: 'Message Sent',
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: e.code,
      body: e.message,
    };
  }
};
