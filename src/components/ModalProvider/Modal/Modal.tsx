import React from 'react';
import ModalStyled from './ModalStyled';
import CloseButton from 'components/CloseButton/CloseButton';

const Modal = ({
  closeModal,
  children,
}: {
  closeModal: () => void;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <ModalStyled>
      <CloseButton
        color="black"
        thickness="1px"
        size="16px"
        onClick={closeModal}
      />
      {children}
    </ModalStyled>
  );
};

export default Modal;
