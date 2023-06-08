import React from "react";
import styled, { css } from "styled-components";

export interface ButtonProps {
  variant?:
    | "primary"
    | "secondary"
    | "square-icon"
    | "link-with-icon"
    | "icon-only";
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
}

export const Button = ({
  variant = "primary",
  disabled,
  onClick,
  children,
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton variant={variant} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  border-radius: 4px;
  padding: 12px 16px;
  font-size: 1em;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-out;

  ${(p) =>
    p.variant === "primary" &&
    css`
      color: #ffffff;
      background-color: ${(p) => p.theme.colors.purple};

      &:hover:not(:disabled),
      &:focus:not(:disabled) {
        opacity: 0.8;
      }

      &:disabled {
        opacity: 0.5;
        cursor: default;
      }
    `}

  ${(p) =>
    p.variant === "secondary" &&
    css`
      color: ${(p) => p.theme.colors.purple};
      background-color: ${(p) => p.theme.colors.white};
      border: 1.5px solid ${(p) => p.theme.colors.purple};

      &:hover:not(:disabled),
      &:focus:not(:disabled) {
        opacity: 0.8;
      }

      &:disabled {
        opacity: 0.5;
        cursor: default;
      }
    `}

   ${(p) =>
    p.variant === "square-icon" &&
    css`
      background-color: ${(p) => p.theme.colors.white};
      border: 1.5px solid ${(p) => p.theme.colors.purple};
      padding: 15px;
      width: 44px;
      height: 44px;

      &:hover:not(:disabled),
      &:focus:not(:disabled) {
        opacity: 0.8;
      }

      &:disabled {
        opacity: 0.5;
        cursor: default;
      }
    `}

 ${(p) =>
    p.variant === "link-with-icon" &&
    css`
      color: ${(p) => p.theme.colors.purple};
      background-color: transparent;
      border: none;
      padding: 0;
      width: auto;
      height: auto;

      svg {
        margin-right: 5px;
      }

      &:hover:not(:disabled),
      &:focus:not(:disabled) {
        text-decoration: underline;
      }

      &:disabled {
        opacity: 0.5;
        cursor: default;
      }
    `}

    ${(p) =>
    p.variant === "icon-only" &&
    css`
      background-color: transparent;
      border: none;
      padding: 0;
      width: auto;
      height: auto;
    `}
`;
