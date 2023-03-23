import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface CloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: string;
  thickness?: string;
}

const CloseButton = styled.button<CloseButtonProps>`
  position: absolute;
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  right: 20px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: (${(props) => props.size} - ${(props) => props.thickness}) / 2;
    left: 0;
    right: 0;
    height: ${(props) => props.thickness};
    background: ${(props) => props.color};
    border-radius: ${(props) => props.thickness};
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

  &:hover {
    cursor: pointer;
  }
`;

export default CloseButton;
