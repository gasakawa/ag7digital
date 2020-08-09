import React from 'react';

import * as S from './style';
import aboutImage from '../../images/about.jpg';

const About: React.FC = () => {
  return (
    <S.Container id="quienes_somos">
      <S.AboutDetails>
        <S.AboutImage>
          <img src={aboutImage} alt="" />
        </S.AboutImage>

        <S.AboutText>
          <h2>Somos un equipo de profesionales apasionados por lo que hacemos</h2>
          <p>
            Creemos que nuestros clientes tienen <strong>objetivos</strong> y <strong>necesidades</strong> diferentes,
            por eso no tenemos planos de marketing digital fijos. Adaptamos nuestros servicios alineados con la mejor
            estrategia digital que impulse tu negocio.
          </p>
        </S.AboutText>
      </S.AboutDetails>
    </S.Container>
  );
};

export default About;
