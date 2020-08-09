const sgMail = require('@sendgrid/mail');
const { SENDGRID_API_KEY, SENDGRID_TO_EMAIL } = process.env;

exports.handler = async (event, context, callback) => {
  const payload = JSON.parse(event.body);
  const { email, subject } = payload;

  sgMail.setApiKey(SENDGRID_API_KEY);

  const body = Object.keys(payload)
    .map(k => {
      return `${k}: ${payload[k]}`;
    })
    .join('<br><br>');

  const msg = {
    to: SENDGRID_TO_EMAIL,
    from: email,
    subject: subject ? subject : 'Contato | Página Web',
    html: body,
  };

  try {
    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: 'Message Sent',
    };
  } catch (e) {
    return {
      statusCode: e.code,
      body: e.message,
    };
  }
};
