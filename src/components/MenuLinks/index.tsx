import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'gatsby';
import ReactGA from 'react-ga';

import * as S from './style';

const MenuLinks: React.FC = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const menuLinkClickTrack = (link: string): void => {
    ReactGA.event({
      category: 'menu link',
      action: 'click',
      label: `Menu Link - ${link}`,
    });
  };

  return (
    <>
      <S.Container showSideMenu={showSideMenu}>
        <li>
          <Link
            to="/#quienes_somos"
            onClick={() => {
              menuLinkClickTrack('quienes somos');
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
              menuLinkClickTrack('servicios');
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
              menuLinkClickTrack('contacto');
              setShowSideMenu(false);
            }}
          >
            Contacto
          </Link>
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
              menuLinkClickTrack('quienes somos');
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
              menuLinkClickTrack('servicios');
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
              menuLinkClickTrack('contacto');
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
