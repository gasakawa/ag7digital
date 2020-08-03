import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import * as S from './style';

const MenuLinks: React.FC = () => {
  return (
    <S.Container>
      <li>
        <AnchorLink to="/#about">Quienes somos</AnchorLink>
      </li>
      <li>
        <AnchorLink to="/#services">Servicios</AnchorLink>
      </li>
      <li>
        <AnchorLink to="/#contact">Contacto</AnchorLink>
      </li>
    </S.Container>
  );
};

export default MenuLinks;
