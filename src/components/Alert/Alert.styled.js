import styled, { css } from "styled-components";

const defaultVariants = {
  primary: {
    bg: "#cfe2ff",
    color: "#084298",
    border: "#b6d4fe",
  },
  secondary: {
    bg: "#e2e3e5",
    color: "#41464b",
    border: "#d3d6d8",
  },
};

const getVariantStyles = (variant, theme) => {
  const themeVariants = theme?.alert?.variants;
  const current = themeVariants?.[variant] || defaultVariants[variant];

  if (!current) return "";

  return css`
    background-color: ${current.bg};
    color: ${current.color};
    border: 1px solid ${current.border};
  `;
};

const StyledAlert = styled.div`
  display: block;
  padding: 1rem;
  border-radius: 0.375rem;
  margin: 0.5rem 0;

  ${({ variant = "primary", theme }) => getVariantStyles(variant, theme)}
`;

export { StyledAlert };
