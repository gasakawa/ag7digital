import styled, { css } from 'styled-components';
import media from 'styled-media-query';

interface ContainerProps {
  changeBackground: boolean;
}

export const Container = styled.header<ContainerProps>`
  display: flex;
  background-color: #14171f;
  width: 100vw;
  position: fixed;
  padding: 5px;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan('medium')`
    /* padding: 0; */
    align-items: flex-start;
  `}

  ${props =>
    props.changeBackground &&
    css`
      background-color: #14171f;
      padding: 5px;
    `}
`;

export const Logo = styled.div`
  padding: 20px;

  ${media.lessThan('medium')`
    padding: 0;

  `}
`;

export const Menu = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-items: center;
  margin-right: 100px;
  margin-top: 5px;

  ${media.lessThan('medium')`
    margin-right: 0;

  `}
`;
