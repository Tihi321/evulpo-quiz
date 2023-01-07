import React from "react";
import styled from "styled-components";

import { Header } from "./layout/Header";
import { Content } from "./layout/Content";

const AppContainer = styled(({ children, ...rest }) => <div {...rest}>{children}</div>)`
  height: 100vh;
`;

export const Main = () => {
  return (
    <AppContainer>
      <Header />
      <Content />
    </AppContainer>
  );
};
