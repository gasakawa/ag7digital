import React, { useState, useEffect } from 'react';
import { useScrollYPosition } from 'react-use-scroll-position';

import * as S from './style';
import Logo from '../Logo';
import MenuLinks from '../MenuLinks';

interface Props {
  showHeaderMenu?: boolean;
}

const Header: React.FC<Props> = ({ showHeaderMenu }) => {
  const [changeBackground, setChangeBackground] = useState(false);

  const posY = useScrollYPosition();

  useEffect(() => {
    setChangeBackground(posY > 300);
  }, [posY]);

  return (
    <S.Container changeBackground={changeBackground}>
      <S.Logo>
        <Logo />
      </S.Logo>
      {showHeaderMenu && (
        <S.Menu>
          <MenuLinks />
        </S.Menu>
      )}
    </S.Container>
  );
};

export default Header;
