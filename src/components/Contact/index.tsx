import React, { useCallback } from 'react';
import axios from 'axios';

import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
import validator from 'validator';

import * as S from './style';

interface ContactProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<ContactProps>();

  const onSubmit = useCallback(async (data: ContactProps) => {
    const response = await axios.post(`/.netlify/funcions/sendmail`, data);
    console.log(response.data);
  }, []);
  return (
    <S.Container id="contacto">
      <S.Title>
        <h2>Contacto</h2>
      </S.Title>
      <S.Form
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit(onSubmit)}
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" ref={register} />
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nombre"
            ref={register({
              required: 'Campo obligatorio',
            })}
          />
          <S.Error>
            <ErrorMessage errors={errors} name="name" />
          </S.Error>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="E-mail"
            ref={register({
              required: 'Campo obligatorio',
              validate: value => {
                return validator.isEmail(value) || 'E-mail inválido';
              },
            })}
          />
          <S.Error>
            <ErrorMessage errors={errors} name="email" />
          </S.Error>
        </div>
        <div>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Asunto"
            ref={register({
              required: 'Campo obligatorio',
            })}
          />
          <S.Error>
            <ErrorMessage errors={errors} name="subject" />
          </S.Error>
        </div>
        <div>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Mensaje"
            ref={register({
              required: 'Campo obligatorio',
            })}
          />
          <S.Error>
            <ErrorMessage errors={errors} name="message" />
          </S.Error>
        </div>
        <S.Button>
          <button type="submit">ENVIAR</button>
        </S.Button>
      </S.Form>
    </S.Container>
  );
};

export default Contact;
