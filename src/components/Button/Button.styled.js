import styled, { css } from "styled-components";

const defaultVariants = {
  primary: {
    bg: "#0d6efd",
    color: "#fff",
    border: "#0d6efd",
  },
  secondary: {
    bg: "#6c757d",
    color: "#fff",
    border: "#6c757d",
  },
};

const defaultSizes = {
  sm: {
    padding: "0.25rem 0.5rem",
    fontSize: "0.875rem",
  },
  md: {
    padding: "0.375rem 0.75rem",
    fontSize: "1rem",
  },
  lg: {
    padding: "0.5rem 1rem",
    fontSize: "1.25rem",
  },
};

const getVariantStyles = (variant, theme, active, disabled) => {
  const themeVariants = theme?.button?.variants;
  const current = themeVariants?.[variant] || defaultVariants[variant];

  if (!current) return "";

  return css`
    background-color: ${current.bg};
    color: ${current.color};
    border: 1px solid ${current.border};

    opacity: ${disabled ? 0.65 : 1};
    cursor: ${disabled ? "not-allowed" : "pointer"};

    ${active &&
    css`
      box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    `}
  `;
};

const getSizeStyles = (size, theme) => {
  const themeSizes = theme?.button?.sizes;
  const current = themeSizes?.[size] || defaultSizes[size];

  if (!current) return "";

  return css`
    padding: ${current.padding};
    font-size: ${current.fontSize};
  `;
};

const StyledButton = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  border-radius: 0.375rem;
  transition: all 0.15s ease-in-out;

  ${({ variant = "primary", theme, active, disabled }) =>
    getVariantStyles(variant, theme, active, disabled)}

  ${({ size = "md", theme }) => getSizeStyles(size, theme)}
`;

export { StyledButton };
