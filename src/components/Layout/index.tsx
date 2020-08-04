import React from 'react';

import Header from '../Header';
import GlobalStyles from '../../styles/global';

import * as S from './style';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <S.Container>
        <Header />
        <main>{children}</main>
      </S.Container>
    </>
  );
};

export default Layout;
