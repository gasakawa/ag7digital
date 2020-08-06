import styled, { css } from 'styled-components';
import media from 'styled-media-query';

interface ContainerProps {
  showSideMenu: boolean;
}

export const Container = styled.ul<ContainerProps>`
  list-style-type: none;
  display: flex;
  padding: 10px;
  font-size: 1rem;

  ${media.lessThan('medium')`
    display: none;
  `}

  li {
    margin-right: 10px;
    margin-left: 10px;
    color: #fff;

    a {
      text-decoration: none;
      color: #fff;

      &:hover {
        border-bottom: 1px solid #fff;
      }
    }
  }
`;

export const Button = styled.button`
  float: right;
  cursor: pointer;
  background: transparent;
  border: 0;

  ${media.greaterThan('large')`
    display:none;
  `}

  svg {
    color: #fff;
  }
`;

export const SideMenu = styled.ul<ContainerProps>`
  list-style-type: none;

  ${props =>
    props.showSideMenu
      ? css`
      position: fixed;
      top: 0;
      left: 0;
      z-index: 996;
      visibility: visible
      /* display: flex;
      flex-direction: column; */
      overflow-y: auto;
      background: #314751;
      width: 300px;
      height: 100vh;
      box-shadow: 10px 10px  30px 0 rgba(255,255,255, 0.30);
      padding: 20px 30px;
      text-align: left;
      transition: visibility 10s linear;
      opacity: 1;
      transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
      color: #fff;

      li {
        margin-right: 10px;
        margin-left: 10px;
        color: #fff;

        a {
        text-decoration: none;
        color: #fff;
        font-size: 0.8em;

            &:hover {
                border-bottom: 1px solid #fff;
            }
        }
    `
      : css`
          visibility: hidden;
          display: none;
        `}
`;
