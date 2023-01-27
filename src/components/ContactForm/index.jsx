import React from 'react';
import emailjs from 'emailjs-com';

import {
  FormContainerStyled,
  TitleStyled,
  FormStyled,
  LabelStyled,
  InputStyled,
  TextareaStyled,
  ButtonStyled,
} from './styles';

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
    <FormContainerStyled>
      <div>
        <TitleStyled>Entre em contato:</TitleStyled>
        <FormStyled
          onSubmit={sendEmail}
        >
          <LabelStyled>
            Nome:
            <InputStyled type="text" name="name" />
          </LabelStyled>
          <LabelStyled>
            Email:
            <InputStyled type="email" name="email" />
          </LabelStyled>
          <LabelStyled>
            Mensagem:
            <TextareaStyled name="message" />
          </LabelStyled>
          <ButtonStyled type="submit">Enviar</ButtonStyled>
        </FormStyled>
      </div>
    </FormContainerStyled>
  );
}
