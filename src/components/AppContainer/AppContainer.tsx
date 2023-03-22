import React from 'react';
import AppContainerStyled from './AppContainerStyled';

const AppContainer = ({
  children,
}: {
  children: JSX.Element | JSX.Element[] | string;
}) => {
  return <AppContainerStyled>{children}</AppContainerStyled>;
};

export default AppContainer;
