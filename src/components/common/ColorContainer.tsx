import React from "react";
import styled from "styled-components";
import { IContainerProps, IStyledProps } from "../../types/layout";

interface ButtonProps extends IStyledProps, IContainerProps {
  type?: "primary" | "secondary" | "success" | "error" | "inactive";
  noShadow?: boolean;
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

export const ContainerStyled = styled(({ type, noShadow, children, ...rest }) => (
  <div {...rest}>{children}</div>
))`
  background-color: ${({ type }) => getTypeColor(type)};
  box-shadow: ${({ noShadow }) => !noShadow && "0px 2px"};
  width: fit-content;
  border-radius: 6px;
`;

export const ColorContainer = ({
  className,
  type = "primary",
  noShadow,
  children,
  ...props
}: ButtonProps) => {
  return (
    <ContainerStyled noShadow={noShadow} className={className} type={type} {...props}>
      {children}
    </ContainerStyled>
  );
};
