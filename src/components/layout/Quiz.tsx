import React from "react";
import styled, { keyframes } from "styled-components";
import { flexCentered, innerCenterContainer } from "../../styles/shared";
import { Loader } from "../common/Loader";
import { useQuiz } from "../../hooks/useQuiz";
import { Game } from "../game/Game";
import { GameInfo } from "../game/GameInfo";

const reveal = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 40%;
  }
`;

const ContainerStyled = styled.div`
  background-color: ${(props) => props.theme.colors.cashmere};
  ${innerCenterContainer}
  overflow: hidden;
  position: relative;
`;

const SidebarStyled = styled.div`
  background-color: ${(props) => props.theme.colors.cashmere};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;

  animation: ${reveal} 0.6s;
  animation-fill-mode: forwards;
  animation-delay: 0.1s;
  animation-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1);
  box-shadow: 4px 0px 10px 0px ${(props) => props.theme.colors.shadow};
`;

const ContentStyled = styled.div`
  background-color: ${(props) => props.theme.colors.sidecar};
  height: 100%;
  padding-left: 40%;
`;

const LoaderContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  ${flexCentered}
`;

export const Quiz = () => {
  const { showLoader } = useQuiz();

  if (showLoader) {
    return (
      <ContainerStyled>
        <LoaderContainerStyled>
          <Loader />
        </LoaderContainerStyled>
      </ContainerStyled>
    );
  }

  return (
    <ContainerStyled>
      <SidebarStyled>
        <GameInfo />
      </SidebarStyled>
      <ContentStyled>
        <Game />
      </ContentStyled>
    </ContainerStyled>
  );
};
