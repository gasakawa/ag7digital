import React from 'react';

import * as S from './style';
import Logo from '../Logo';
import MenuLinks from '../MenuLinks';

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Logo>
        <Logo />
      </S.Logo>
      <S.Menu>
        <MenuLinks />
      </S.Menu>
    </S.Container>
  );
};

export default Header;
