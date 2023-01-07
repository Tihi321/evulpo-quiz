import React from "react";
import styled from "styled-components";
import { IContainerProps, IStyledProps } from "../../types/layout";

interface ButtonProps extends IStyledProps, IContainerProps {
  type?: "primary" | "secondary" | "success" | "error" | "inactive";
  noShadow?: boolean;
}

const getTypeColor = (
  type: "primary" | "secondary" | "success" | "error" | "inactive",
  theme: any
): string => {
  switch (type) {
    case "secondary":
      return theme.colors.picasso;
    case "inactive":
      return theme.colors.whiteLilac;
    case "success":
      return theme.colors.snowFlurry;
    case "error":
      return theme.colors.waxFlower;
    default:
      return theme.colors.mauve;
  }
};

export const ContainerStyled = styled(({ type, noShadow, children, ...rest }) => (
  <div {...rest}>{children}</div>
))`
  background-color: ${({ type, theme }) => getTypeColor(type, theme)};
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
