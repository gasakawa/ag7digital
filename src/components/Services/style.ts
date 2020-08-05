import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
  margin-right: 5px;
  padding: 80px 0;

  ${media.lessThan('medium')`
    padding: 60px 0;
  `}
`;

export const Title = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;

  h2 {
    font-size: 2.13em;
    line-height: 1.625;
    color: #131517;
  }
`;

export const ServicesList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-row-gap: 30px;
  grid-column-gap: 50px;
  color: #131517;
  padding: 15px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: 1px solid #1b2431;
    border-radius: var(--space-xs);
    box-shadow: 0 0 30px 0 rgba(140, 140, 140, 0.3);

    span {
      margin-top: 20px;
      font-weight: 400;
      font-size: 1.33em;
      line-height: 1.8;
      margin-bottom: var(--space-xs);
    }

    p {
      font-size: 0.9em;
      font-family: 'Open Sans', sans-serif;
      margin-bottom: var(--space-xs);
    }

    svg {
      color: #016795;
    }
  }
`;
