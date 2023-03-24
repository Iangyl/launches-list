import styled from 'styled-components';

export const StyledToggle = styled.div`
  display: flex;
  border-radius: 12px;
  border: 1px solid ${(props) => props.color};
`;

export const Input = styled.input.attrs({ type: 'radio' })`
  visibility: hidden;
  position: absolute;
  z-index: -5;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 3px;
  background-color: ${(props) => props.color};

  &:hover {
    cursor: pointer;
  }
`;

export const LabelLeft = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 3px;
  background-color: ${(props) => props.color};
  border-bottom-left-radius: 12px;
  border-top-left-radius: 12px;

  &:hover {
    cursor: pointer;
  }
`;

export const LabelRight = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 3px;
  background-color: ${(props) => props.color};
  border-bottom-right-radius: 12px;
  border-top-right-radius: 12px;

  &:hover {
    cursor: pointer;
  }
`;
