import React from 'react';
import emailjs from 'emailjs-com';

import '../assets/contact.css';

export default function ContactForm() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('contato_portifolio', 'template_0p7yt3b', e.target, 'nTCrojYa4BqZjbII0')
      .then(() => {
        alert('Email enviado com sucesso!');
      }, (error) => {
        alert(error.message);
      });

    e.target.reset();
  };

  return (
    <div className="contact-form-container">
      <div>
        <h1>Entre em contato:</h1>
        <form
          onSubmit={sendEmail}
          className="contact-form"
        >
          <label className="line-contact-form">
            Nome:
            <input type="text" name="name" />
          </label>
          <label className="line-contact-form">
            Email:
            <input type="email" name="email" />
          </label>
          <label className="line-contact-form">
            Mensagem:
            <textarea name="message" />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
