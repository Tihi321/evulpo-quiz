import React from "react";
import styled from "styled-components";
import { IContainerProps, IStyledProps } from "../../types/layout";

interface CenterContainerProps extends IStyledProps, IContainerProps {}

export const ContainerStyled = styled.div`
  height: 100%;
  max-height: 700px;
  width: 100%;
  max-width: 800px;
`;

export const CenterContainer = ({ className, children, ...props }: CenterContainerProps) => {
  return (
    <ContainerStyled className={className} {...props}>
      {children}
    </ContainerStyled>
  );
};
