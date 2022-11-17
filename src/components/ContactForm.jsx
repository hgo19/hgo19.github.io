import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('contato_portifolio', 'template_0p7yt3b', e.target, 'nTCrojYa4BqZjbII0')
      .then(() => {
          alert('Email enviado com sucesso!');
      }, (error) => {
          alert(error.message);
      });

    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={sendEmail}>
        <label>
          Nome:
          <input type="text" name="name"/>
        </label>
        <label>
          Email:
          <input type="email" name="email"/>
        </label>
        <label>
          Mensagem:
          <textarea name="message"/>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
