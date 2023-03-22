import styled from 'styled-components';
import { cardProperties } from 'utils/styles-constants';

const CardStyled = styled.article`
  width: ${cardProperties.width};
  border-radius: ${cardProperties.borderRadius};
`;

export default CardStyled;
