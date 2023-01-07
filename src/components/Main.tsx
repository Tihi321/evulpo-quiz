import React from "react";
import styled from "styled-components";

import { Header } from "./layout/Header";
import { AppRouter } from "./AppRouter";
import { backgroundColor } from "../themes";
import { media } from "../utils/responsive";
import { EBreakpoints, ESide } from "../enums/style";
import { CenterContainer } from "./common/CenterContainer";

const AppContainer = styled.div`
  height: 100vh;
  background: ${backgroundColor};
  padding: 10px;
  ${media(EBreakpoints.LAPTOP, ESide.UP)} {
    padding: 20px;
  }
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: "header" "content";
`;

const HeaderContainer = styled.header`
  grid-area: header;
  padding-bottom: 8px;
`;

const MainContainer = styled.main`
  grid-area: content;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Main = () => {
  return (
    <AppContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <MainContainer>
        <CenterContainer>
          <AppRouter />
        </CenterContainer>
      </MainContainer>
    </AppContainer>
  );
};
