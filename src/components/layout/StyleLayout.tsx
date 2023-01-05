import React from "react";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";
import { coreStyles } from "../../styles/core";
import { IContainerProps } from "../../types/layout";

const CoreStyle = createGlobalStyle`
  ${coreStyles}
`;

export const StyleLayout = ({ children }: IContainerProps) => (
  <>
    <Normalize />
    <CoreStyle />
    {children}
  </>
);
