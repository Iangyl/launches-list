import styled from 'styled-components';

export const CheckboxSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckboxOptionLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 0.5rem;
`;

export const Title = styled.h3`
  display: flex;
  align-items: center;
  gap: 12px;
  color: gray;
`;

export const OpenCloseButton = styled.button`
  width: auto;
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-bottom: 1.5px;

  &:hover {
    cursor: pointer;
  }
`;
