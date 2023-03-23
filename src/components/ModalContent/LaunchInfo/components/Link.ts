import styled from 'styled-components';

const Link = styled.a`
  color: blue;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &:visited {
    color: purple;
    text-decoration: underline;
  }
`;

export default Link;
