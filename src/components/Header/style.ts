import styled, { css } from 'styled-components';
import media from 'styled-media-query';

interface ContainerProps {
  changeBackground: boolean;
}

export const Container = styled.header<ContainerProps>`
  display: flex;
  width: 100vw;
  position: fixed;
  padding: 5px;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan('medium')`
    padding: 0;
    align-items: flex-start;
  `}

  ${props =>
    props.changeBackground &&
    css`
      background-color: #14171f;
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
  margin-right: 100px;

  ${media.lessThan('medium')`
    display:none;
  `}
`;
