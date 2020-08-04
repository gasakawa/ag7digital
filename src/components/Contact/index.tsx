import React from 'react';

import * as S from './style';

const Contact: React.FC = () => {
  return (
    <S.Container id="contact">
      <S.Title>
        <h2>Contacto</h2>
      </S.Title>
      <S.Form>
        <div>
          <input type="text" id="name" name="name" placeholder="Nombre" />
          <input type="text" id="email" name="email" placeholder="E-mail" />
        </div>
        <div>
          <input type="text" id="subject" name="subject" placeholder="Asunto" />
        </div>
        <div>
          <textarea name="message" id="message" cols={30} rows={10} placeholder="Mensaje" />
        </div>
        <S.Button>
          <button type="submit">ENVIAR</button>
        </S.Button>
      </S.Form>
    </S.Container>
  );
};

export default Contact;
