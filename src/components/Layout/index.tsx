import React from 'react';

import Header from '../Header';
import GlobalStyles from '../../styles/global';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
