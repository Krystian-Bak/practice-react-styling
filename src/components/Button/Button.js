import React from "react";
import { StyledButton } from "./Button.styled";

const Button = ({
  children,
  variant = "secondary",
  size = "md",
  active = false,
  disabled = false,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      active={active}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
