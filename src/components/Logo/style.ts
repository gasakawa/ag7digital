import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.img`
  height: 110px;
  width: 225px;
  margin-left: 2em;

  ${media.lessThan('medium')`
    margin-left: 0;
    height: 95px;
  width: 190px;
  `}
`;
