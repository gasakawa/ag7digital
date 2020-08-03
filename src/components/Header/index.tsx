import React, { useState, useEffect, useCallback } from 'react';
import { useScrollYPosition } from 'react-use-scroll-position';

import * as S from './style';
import Logo from '../Logo';
import MenuLinks from '../MenuLinks';

const Header: React.FC = () => {
  const [changeBackground, setChangeBackground] = useState(false);

  const posY = useScrollYPosition();

  useEffect(() => {
    setChangeBackground(posY > 200);
  }, [posY]);

  return (
    <S.Container changeBackground={changeBackground}>
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
