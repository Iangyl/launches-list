import React from 'react';
import { createPortal } from 'react-dom';
import Modal from '../Modal/Modal';
import ModalContainerStyled from './ModalContainerStyled';
import LaunchInfo from 'components/ModalContent/LaunchInfo/LaunchInfo';

const ModalContainer = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) => {
  return createPortal(
    isOpen ? (
      <ModalContainerStyled>
        <Modal closeModal={closeModal}>
          <LaunchInfo />
        </Modal>
      </ModalContainerStyled>
    ) : (
      <></>
    ),
    document.body
  );
};

export default ModalContainer;
