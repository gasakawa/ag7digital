import React from 'react';

import Header from '../Header';
import GlobalStyles from '../../styles/global';

import * as S from './style';

interface Props {
  showHeaderMenu?: boolean;
}

const Layout: React.FC<Props> = ({ showHeaderMenu = false, children }) => {
  return (
    <>
      <GlobalStyles />
      <S.Container>
        <Header showHeaderMenu={showHeaderMenu} />
        <main>{children}</main>
      </S.Container>
    </>
  );
};

export default Layout;
