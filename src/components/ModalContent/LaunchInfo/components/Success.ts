import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface SuccessProps extends HTMLAttributes<HTMLSpanElement> {
  backgroundColor?: string;
}

const Success = styled.span<SuccessProps>`
  background-color: ${(props) => props.backgroundColor};
  color: white;
  border-radius: 7px;
  padding: 3px 5px;
`;

export default Success;
