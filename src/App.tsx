import React from "react";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";
import { withStateProvider } from "ts-use";
import { Main } from "./components/Main";
import { SocketClient } from "./controllers/SocketClient";
import { initialState } from "./store/initialState";
import { useContextStateProvider } from "./store/useContextStateProvider";
import { coreStyles, headingStyles, textStyles } from "./styles/core";
import { ThemeContainer } from "./themes";

const CoreStyle = createGlobalStyle`
  ${coreStyles}
  ${headingStyles}
  ${textStyles}
`;

const App = ({ socketIO }: { socketIO: any }) => {
  useContextStateProvider();
  SocketClient.socketIo = socketIO;

  return (
    <ThemeContainer>
      <Normalize />
      <CoreStyle />
      <Main />
    </ThemeContainer>
  );
};

const withProvider: any = withStateProvider(initialState);

export default withProvider(App);
