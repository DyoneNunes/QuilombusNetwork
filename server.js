const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config(); // se for usar .env

const app = express();
app.use(cors());
app.use(express.json());

app.listen(5000, () => console.log("Server running on port 5000"));

// Configurar transporte de e-mail
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || "contato@quilombusnetwork.com.br",
    pass: process.env.EMAIL_PASS || "dcgs mepv szqf dauk", // cuidado com isso
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Erro ao verificar email:", error);
  } else {
    console.log("Pronto para enviar");
  }
});

// Rota de contato
app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const mail = {
    from: email,
    to: "contato@quilombusnetwork.com.br",
    subject: "Vamos fazer um contato sobre uma proposta?",
    html: `<p>Name: ${firstName} ${lastName}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Erro ao enviar:", error);
      res.status(500).json({ message: "Erro ao enviar mensagem." });
    } else {
      res.status(200).json({ message: "Mensagem enviada com sucesso!" });
    }
  });
});
