import useScrollControl from 'hooks/useScrollControl/useScrollControl';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ModalContainer from './ModalContainer/ModalContainer';
import { IModalProvider } from './ModalProvider.types';

const ModalContext = React.createContext<IModalProvider | null>(null);

const ModalProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const [blockScroll, allowScroll] = useScrollControl();

  const openModal = React.useCallback(() => {
    setIsOpen(true);
    blockScroll();
  }, [setIsOpen]);

  const closeModal = React.useCallback(() => {
    setIsOpen(false);
    allowScroll();
    navigate('/');
  }, [setIsOpen]);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      <ModalContainer isOpen={isOpen} closeModal={closeModal} />
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

export const useModal = () => React.useContext(ModalContext) as IModalProvider;
