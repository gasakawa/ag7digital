import React from 'react';
import { FaWpforms } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { GoMegaphone } from 'react-icons/go';

import * as S from './style';

const Services: React.FC = () => {
  return (
    <S.Container id="services">
      <S.Title>
        <h2>¿Que hacemos?</h2>
      </S.Title>
      <S.ServicesList>
        <div>
          <FiUsers size={42} />
          <span>Social Media</span>
          <p>
            Elaboramos estrategias en conjunto con nuestros clientes de acuerdo al Buyer Persona de su negocio, creando
            contenidos relevantes para los seguidores utilizando el canal de distribución que más se adecua a la
            estrategia.
          </p>
        </div>
        <div>
          <FaWpforms size={42} />
          <span>Diseño Web</span>
          <p>
            Diseñamos su sitio moderno, escalable y compatible con dispositivos móviles, optimizado para SEO,
            facilitando que sus clientes potenciales lo encuentren de forma rápida con el fin de lograr los objetivos.
          </p>
        </div>
        <div>
          <GoMegaphone size={42} />
          <span>Tráfico Pago</span>
          <p>
            Elaboramos estrategias de anuncios focadas en los objetivos de nuestros clientes, aprovechando al máximo las
            características de las herramientas de tráfico pago (Facebook Ads / Google Ads).
          </p>
        </div>
      </S.ServicesList>
    </S.Container>
  );
};

export default Services;
