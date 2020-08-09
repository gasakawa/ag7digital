import React from 'react';
import { Link } from 'gatsby';

import * as S from './style';

const NotFound: React.FC = () => {
  return (
    <S.Container>
      <div>
        <h1>404</h1>
        <p>Lo sentimos, aparentemente esta página que está bucando no existe o fue removida</p>
        <Link to="/">Volver</Link>
      </div>
    </S.Container>
  );
};

export default NotFound;
