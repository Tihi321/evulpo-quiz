import React from "react";
import styled from "styled-components";
import { IContainerProps, IStyledProps } from "../../types/layout";

interface CenterContainerProps extends IStyledProps, IContainerProps {}

export const ContainerStyled = styled.div`
  height: 100%;
  max-height: 540px;
  width: 100%;
  max-width: 600px;
  background-color: ${(props) => props.theme.colors.cashmere};
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
`;

export const CenterContainer = ({ className, children, ...props }: CenterContainerProps) => {
  return (
    <ContainerStyled className={className} {...props}>
      {children}
    </ContainerStyled>
  );
};
