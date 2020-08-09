import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 270px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    ${media.lessThan('large')`
        margin-left: 30px;
    `}

    h1 {
      font-size: 6.4em;
    }

    p {
      font-weight: 300;
      color: rgba(0, 0, 0, 0.5);
      font-size: 1.33em;
      line-height: 1.8;
    }

    a {
      background: #000;
      color: #fff;
      width: 200px;
      text-align: center;
      text-decoration: none;
      border: 0;
      margin-top: 30px;
      border-radius: 0.25em;
      font-weight: 400;
      font-size: 1.3em;
      padding: 15px;
    }
  }
`;
