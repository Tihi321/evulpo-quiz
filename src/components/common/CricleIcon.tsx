import React from "react";
import styled from "styled-components";
import { flexCentered } from "../../styles/shared";
import { IStyledProps } from "../../types/layout";

const ContainerStyled = styled(({ animate, children, ...rest }) => <div {...rest}>{children}</div>)`
  ${flexCentered}
  color: ${(props) => props.theme.colors.bazar};
  background-color: ${(props) => props.theme.colors.whiteLilac};
  padding: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 26px;
  font-weight: 900;
  cursor: ${({ animate }) => (animate ? "pointer" : "default")};
  transition: transform 0.25s ease;

  &:hover {
    transform: ${({ animate }) => (animate ? "scale(1.2)" : "scale(1)")};
  }
`;

interface CricleIconnProps extends IStyledProps {
  text?: string;
  animate?: boolean;
}

export const CricleIcon = ({ className, animate, text = "?" }: CricleIconnProps) => {
  return (
    <ContainerStyled className={className} animate={animate}>
      {text}
    </ContainerStyled>
  );
};
