import React from "react";
import styled from "styled-components";
import { IStyledProps } from "../../types/layout";
import { ColorContainer } from "./ColorContainer";

interface ButtonProps extends IStyledProps {
  size?: "small" | "regular";
  type?: "primary" | "secondary" | "success" | "error" | "inactive";
  disabled?: boolean;
  label: string;
  onClick?: () => void;
}

const getTypeColor = (type: "primary" | "secondary" | "success" | "error" | "inactive"): string => {
  switch (type) {
    case "secondary":
      return "#FFF8A2";
    case "inactive":
      return "#F4E9F7";
    case "success":
      return "#DBFFC8";
    case "error":
      return "#FFB59F";
    default:
      return "#CBA8FF";
  }
};

export const ButtonStyled = styled(({ size, disabled, children, ...rest }) => (
  <button disabled={disabled} {...rest}>
    {children}
  </button>
))`
  border: none;
  color: #9f7381;
  border-radius: 6px;
  background-color: inherit;
  padding: ${({ size }) => (size === "regular" ? "8px" : "6px")};
  width: ${({ size }) => (size === "regular" ? "160px" : "80px")};
  font-size: ${({ size }) => (size === "regular" ? "16px" : "14px")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-weight: bold;
`;

export const Button = ({
  className,
  size = "regular",
  type = "primary",
  label,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <ColorContainer noShadow={disabled} type={type}>
      <ButtonStyled className={className} size={size} disabled={disabled} {...props}>
        {label}
      </ButtonStyled>
    </ColorContainer>
  );
};
