import Styled from 'styled-components';

export const List = Styled.ul`
  display: grid;
  grid-template-columns: repeat(4, calc((100vw - 75px) / 4));
  grid-gap: 10px;
  padding: 20px 15px 20px 0;

`;
