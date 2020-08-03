import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.ul`
  /* list-style-type: none; */
  list-style: none;
  display: flex;
  padding: 10px;
  font-size: 1rem;

  li {
    margin-right: 10px;
    margin-left: 10px;
    color: #fff;

    a {
      text-decoration: none;
      color: #fff;

      &:hover {
        border-bottom: 1px solid #fff;
      }
    }
  }

  ${media.lessThan('medium')`
    display: none;
  `}
`;
