import styled, { css } from 'styled-components';

interface ContainerProps {
  changeBackground: boolean;
}

export const Container = styled.header<ContainerProps>`
  display: grid;
  width: 100vw;
  position: fixed;
  grid-template-columns: auto auto;
  padding: 5px;
  grid-column-gap: 50px;
  align-items: center;

  ${props =>
    props.changeBackground &&
    css`
      background-color: #14171f;
    `}
`;

export const Logo = styled.div`
  padding: 20px;
`;

export const Menu = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
