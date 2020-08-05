import React from 'react';
import { FaRegCommentAlt, FaWpforms } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { GoMegaphone } from 'react-icons/go';

import * as S from './style';

const Services: React.FC = () => {
  return (
    <S.Container id="services">
      <S.Title>
        <h2>Que hacemos</h2>
      </S.Title>
      <S.ServicesList>
        <div>
          <FaRegCommentAlt size={42} />
          <span>Consultoría</span>
          <p>
            Administración de cuentas de publicidad (Facebook Ads / Google AdWords), con metodología focada en generar
            conversiones.
          </p>
        </div>
        <div>
          <FiUsers size={42} />
          <span>Social Media</span>
          <p>Asesoría y acompañamiento en el manejo de redes sociales</p>
        </div>
        <div>
          <FaWpforms size={42} />
          <span>Diseño Web</span>
          <p>
            Administración de cuentas de publicidad (Facebook Ads / Google AdWords), con metodologías focadas en generar
            conversiones.
          </p>
        </div>
        <div>
          <GoMegaphone size={42} />
          <span>Tráfico Pago</span>
          <p>
            Administración de cuentas de publicidad (Facebook Ads / Google AdWords), con metodología focada en generar
            conversiones.
          </p>
        </div>
      </S.ServicesList>
    </S.Container>
  );
};

export default Services;
