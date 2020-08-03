import React from 'react';

import * as S from './style';
import aboutImage from '../../images/about.jpg';

const About: React.FC = () => {
  return (
    <S.Container id="about">
      <S.AboutDetails>
        <S.AboutImage>
          <img src={aboutImage} alt="" />
        </S.AboutImage>

        <S.AboutText>
          <h2>Somos un equipo de profesionales apasionados por lo que hacemos</h2>
          <p>En AG7, encontrarás el equp</p>
        </S.AboutText>
      </S.AboutDetails>
    </S.Container>
  );
};

export default About;
