import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
  padding: 160px 0;

  ${media.lessThan('medium')`
    padding: 120px 60px 0;
  `}
`;

export const AboutDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}

  margin-right: -25px;
  margin-bottom: -50px;
  margin-left: -25px;
  padding: 0 25px;
`;

export const AboutImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3rem;

  ${media.lessThan('medium')`
       margin: 0;
    `}

  img {
    box-shadow: 0 0 30px 0 rgba(22, 24, 26, 0.1);
    width: 550px;
    height: 367px;

    ${media.lessThan('medium')`
        width: 315px;
        height: 210px;
    `}
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  max-width: 30%;
  align-items: flex-start;
  justify-content: flex-start;

  ${media.lessThan('medium')`
    max-width: 100%;
  `}

  h2 {
    font-size: 2.13em;
    line-height: 1.625;
    font-weight: 500;
    color: #131517;
    margin-bottom: 10px;

    ${media.lessThan('medium')`
        font-size: 1.13em;
        font-weight: 500;
    `}
  }

  p {
    line-height: 1.86;
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;

    ${media.lessThan('medium')`
        font-size: 0.8em;

    `}
  }
`;
