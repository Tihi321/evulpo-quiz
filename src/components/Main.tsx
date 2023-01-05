import React from "react";
import styled from "styled-components";

import { Header } from "./layout/Header";
import { Sidebar } from "./layout/Sidebar";
import { Content } from "./layout/Content";
import { media } from "../utils/responsive";
import { EBreakpoints, ESide } from "../enums/style";

const AppContainer = styled(({ children, ...rest }) => <div {...rest}>{children}</div>)`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: "header" "sidebar" "content";

  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    grid-template-columns: 1fr 3fr;
    grid-template-areas: "header header" "sidebar content";
  }
`;

export const Main = () => {
  return (
    <AppContainer>
      <Header />
      <Sidebar />
      <Content />
    </AppContainer>
  );
};
