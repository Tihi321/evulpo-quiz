import React from "react";
import styled from "styled-components";
import { searchBackgroundColor, searchBorderColor, searchTextColor } from "../../themes";
import { IStyledProps } from "../../types/layout";

export const ButtonStyled = styled(({ size, children, ...rest }) => (
  <button {...rest}>{children}</button>
))`
  border: 1px solid ${searchBorderColor};
  background-color: ${searchBackgroundColor};
  color: ${searchTextColor};
  padding: ${({ size }) => (size === "medium" ? "10px" : "5px")};
  width: 100%;
  cursor: pointer;
`;

interface ButtonProps extends IStyledProps {
  size?: "small" | "medium";
  label: string;
  onClick?: () => void;
}

export const Button = ({ className, size = "medium", label, ...props }: ButtonProps) => {
  return (
    <ButtonStyled className={className} size={size} {...props}>
      {label}
    </ButtonStyled>
  );
};
