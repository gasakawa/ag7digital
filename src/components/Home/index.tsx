import React from 'react';
import { FiArrowDown } from 'react-icons/fi';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import * as S from './style';

const Home: React.FC = () => {
  return (
    <S.Container>
      <h1>Estrategias digitales para impulsar tu negocio</h1>
      <S.Button>
        <AnchorLink to="/#quienes_somos">
          <FiArrowDown size={32} />
        </AnchorLink>
      </S.Button>
    </S.Container>
  );
};

export default Home;
