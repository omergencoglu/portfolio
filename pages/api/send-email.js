const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

async function handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `
      Name: ${body.enteredName}\r\n
      Email: ${body.enteredEmail}\r\n
      Message: ${body.enteredMessage}
    `;

  const data = {
    to: "omersaitgencoglu@gmail.com",
    from: process.env.MAIL_SENDER,
    subject: `New message from ${body.enteredName}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  try {
    await mail.send(data);
    res.status(201).json({ message: "Sent email successfully" });
  } catch (error) {
    res.status(500).json({ message: "Sending email failed!" });
    return;
  }
}

export default handler;
