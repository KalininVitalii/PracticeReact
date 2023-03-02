import styled from 'styled-components';

export const Resalt = styled.span`
  color: ${({ isOrange }) => (isOrange ? 'orange' : 'blue')};
`;

export const Name = styled.p`
  font-size: 1.5em;
  color: palevioletred;
  &:hover {
    background-color: blue;
  }
  &:hover ${Resalt} {
    color: red;
  }
`;
