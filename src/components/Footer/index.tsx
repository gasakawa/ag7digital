import React from 'react';
import { FiInstagram, FiLinkedin } from 'react-icons/fi';

import * as S from './style';

const Footer: React.FC = () => {
  return (
    <S.Container>
      <S.FooterContact>
        <span>
          <a href="mailto:contacto@ag7digital.com">contacto@ag7digital.com</a>
        </span>
        <div>
          <a href="https://www.instagram.com/ag7.digital/" target="_blank" rel="noreferrer">
            <FiInstagram size={16} title="instagram" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/company/ag7-digital-business" target="_blank" rel="noreferrer">
            <FiLinkedin size={16} title="linkedin" />
          </a>
        </div>
      </S.FooterContact>
      <span>© 2020 - AG7 Digital Business - Todos los derechos reservados</span>
    </S.Container>
  );
};

export default Footer;
