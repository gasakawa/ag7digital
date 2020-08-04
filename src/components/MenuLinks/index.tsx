import React, { useState } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FiMenu } from 'react-icons/fi';

import { Link } from 'gatsby';
import * as S from './style';

const MenuLinks: React.FC = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <>
      <S.Container showSideMenu={showSideMenu}>
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
      <S.Button
        onClick={() => {
          setShowSideMenu(!showSideMenu);
        }}
      >
        <FiMenu size={32} />
      </S.Button>
      <S.SideMenu showSideMenu={showSideMenu}>
        <li>
          <Link
            to="/#about"
            onClick={() => {
              setShowSideMenu(false);
            }}
          >
            Quienes somos
          </Link>
        </li>
        <li>
          <AnchorLink to="/#services">Servicios nuevos</AnchorLink>
        </li>
        <li>
          <Link
            to="/#contact"
            onClick={() => {
              setShowSideMenu(false);
            }}
          >
            Contacto
          </Link>
        </li>
      </S.SideMenu>
    </>
  );
};

export default MenuLinks;
