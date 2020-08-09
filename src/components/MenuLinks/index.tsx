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
          <AnchorLink to="/#quienes_somos">Quienes somos</AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#servicios">Servicios</AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#contacto">Contacto</AnchorLink>
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
            to="/#quienes_somos"
            onClick={() => {
              setShowSideMenu(false);
            }}
          >
            Quienes somos
          </Link>
        </li>
        <li>
          <Link
            to="/#servicios"
            onClick={() => {
              setShowSideMenu(false);
            }}
          >
            Servicios
          </Link>
        </li>
        <li>
          <Link
            to="/#contacto"
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
