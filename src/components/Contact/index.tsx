import React, { useCallback, useState } from 'react';
import axios from 'axios';
import ReactGA from 'react-ga';

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
  const { register, handleSubmit, errors, reset } = useForm<ContactProps>();
  const [showMessage, setShowMessage] = useState(false);

  const sendButtonClick = (): void => {
    ReactGA.event({
      category: 'contact',
      action: 'click',
      label: `Send Message`,
    });
  };

  const onSubmit = useCallback(
    async (data: ContactProps) => {
      try {
        await axios.post(`/.netlify/functions/sendmail`, data);
        reset();
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
      } catch (e) {
        setShowMessage(false);
      }
    },
    [reset],
  );
  return (
    <S.Container id="contacto">
      <S.Title>
        <h2>Contacto</h2>
      </S.Title>
      {showMessage && (
        <S.MessageBox>
          <h1>Gracias por su contacto</h1>
          <span>Recibimos su mensaje, lo contactaremos pronto</span>
        </S.MessageBox>
      )}

      <S.Form name="contact" method="post" onSubmit={handleSubmit(onSubmit)}>
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
            id="phone"
            name="phone"
            placeholder="Teléfono"
            ref={register({
              required: 'Campo obligatorio',
            })}
          />
          <S.Error>
            <ErrorMessage errors={errors} name="phone" />
          </S.Error>
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
          <button
            type="submit"
            onClick={() => {
              sendButtonClick();
            }}
          >
            ENVIAR
          </button>
        </S.Button>
      </S.Form>
    </S.Container>
  );
};

export default Contact;
