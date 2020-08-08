import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #131517;
  color: #fff;
  height: 100px;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}

  span {
    font-size: 0.8em;
    font-family: 'Poppins', sans-serif;
    margin: 0 0 0 32px;

    ${media.lessThan('medium')`
    font-size: 0.6em;
    margin: 0;
  `}
  }
`;

export const FooterContact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    a {
      text-decoration: none;
      color: #fff;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 50%;
    margin: 10px;
    border: 1px solid rgba(250, 250, 250, 0.5);

    a {
      text-decoration: none;
      display: flex;

      svg {
        color: #fff;
      }
    }
  }
`;
