async function handler(req, res) {
  const body = JSON.parse(req.body);

  const formData = new FormData();
  formData.append("access_key", process.env.WEBFORMS_API_KEY);
  formData.append("email", body.enteredEmail);
  formData.append("from_name", body.enteredName);
  formData.append(
    "subject",
    `New message from ${body.enteredName} - omergencoglu.dev`
  );
  formData.append("name", body.enteredName);
  formData.append("message", body.enteredMessage);

  const result = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  if (result.ok) {
    res.status(201).json({ message: "Email sent successfully!" });
    return;
  }
  res.status(500).json({ message: "Sending email failed!" });
}

export default handler;
