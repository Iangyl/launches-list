import styled from 'styled-components';
import { cardProperties } from 'utils/styles-constants';

const imageStylesProps = cardProperties.image;

const ThumbnailStyled = styled.img`
  width: ${imageStylesProps.width};
  min-height: ${imageStylesProps.height_min};
  border-radius: ${imageStylesProps.borderRadius};

  &:hover {
    opacity: 0.7;
  }
`;

export default ThumbnailStyled;
