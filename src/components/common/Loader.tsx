import React from "react";
import styled, { keyframes } from "styled-components";
import { IStyledProps } from "../../types/layout";

export interface ILoaderProps extends IStyledProps {}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled(({ type, size, border, ...rest }) => <div {...rest} />)`
  cursor: copy;
  border: 2px solid ${(props) => props.theme.colors.bazar};
  border-top: 2px solid transparent;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: 0.5s linear ${spin} infinite;
  margin: 4px;
`;
