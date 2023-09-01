async function handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `Name: ${body.enteredName}\r\nMessage: ${body.enteredMessage}`;

  const formData = new FormData();
  formData.append("access_key", process.env.WEBFORMS_API_KEY);
  formData.append("email", body.enteredEmail);
  formData.append("from_name", body.enteredName);
  formData.append(
    "subject",
    `New message from ${body.enteredName} - omergencoglu.dev`
  );
  formData.append("details", message);

  try {
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    res.status(201).json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Sending email failed!" });
    return;
  }
}

export default handler;
