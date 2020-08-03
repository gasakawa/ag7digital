import styled from 'styled-components';

export const Container = styled.header`
  display: grid;
  width: 100vw;
  position: fixed;
  grid-template-columns: auto auto;
  padding: 5px;
  grid-column-gap: 50px;
  align-items: center;
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
