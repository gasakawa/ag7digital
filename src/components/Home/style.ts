import styled from 'styled-components';
import media from 'styled-media-query';

import backgroundImage from '../../images/background-image.png';

export const Container = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  h1 {
    font-size: 4.8em;
    font-weight: 300;
    line-height: 1.2;
    margin: 0 0 10px;
    padding: 0 30px;
    letter-spacing: -0.3px;

    ${media.lessThan('medium')`
        font-size: 3.73em;
    `}
  }
`;

export const Button = styled.div`
  bottom: 30px;
  position: absolute;
  padding: 0 30px;
  width: 100%;

  a {
    background: transparent;
    border-color: rgba(255, 255, 255, 0.3);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e5e6e7;
    border-radius: 50%;

    width: 70px;
    height: 70px;
    line-height: 70px;
    text-decoration: none;
    margin-left: 30px;
    transition: ease-out 0.16s;

    svg {
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;
