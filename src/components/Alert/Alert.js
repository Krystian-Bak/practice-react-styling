import React from 'react';

import { StyledAlert } from './Alert.styled';

const Alert = ({ children, variant = "secondary", ...props }) => {
  // tutaj uzwywam warunkow początkowych, fajnie było by zrobić w rozszerzeniu aplikacji zmianę stylowania jasny/ciemny, widok dwu/jednokolumnowy
  return (
    <StyledAlert variant={variant} {...props}>
      {children}
    </StyledAlert>
  );
};

export default Alert;