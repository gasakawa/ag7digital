import styled from 'styled-components';
import media from 'styled-media-query';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: #131517;
  padding: 15px;
  width: 50%;

  ${media.lessThan('medium')`
    width: 100%;
  `}

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    flex: 1;
    input,
    textarea {
      background: 0 0;
      width: 100%;
      border: 1px solid rgba(0, 0, 0, 0.3);
      margin-bottom: 1rem;
      padding: 15px 20px;
      box-shadow: none;
      font: 400 16px 'Open Sans', sans-serif;
      margin: 10px;
      resize: none;
      color: #131517;

      &::placeholder {
        font: 300 16px 'Open Sans', sans-serif;
      }
    }
  }
`;

export const Button = styled.div`
  display: flex;
  padding: 8px;

  button {
    cursor: pointer;
    background: #fff;
    padding: 16px 42px;
    border: 1px solid #016795;
    padding: 10px 15px;
    color: #131517;
    transition: background-color 0.2s;

    font: 400 13px Poppins, sans-serif;
    letter-spacing: 2px;
    text-transform: uppercase;

    &:hover {
      background: ${shade(0.2, '#016795')};
      color: #fff;
    }
  }
`;

export const Error = styled.span`
  display: flex;
  align-self: flex-start;
  font-size: 0.8rem;
  margin-top: 1px;
  color: #c53030;
  margin-left: 10px;
`;

export const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  background: #ebf8ff;
  height: auto;
  padding: 20px;
  width: 300px;
  border-radius: 0.0753em;
  color: #3172b7;

  h1 {
    font-weight: 600;
    font-size: 1.3em;
    text-align: center;
    margin-bottom: 10px;
  }

  span {
    font-weight: 300;
    font-size: 1em;
  }
`;
