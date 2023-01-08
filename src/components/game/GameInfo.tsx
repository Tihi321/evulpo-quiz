import React from "react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";

import { flexCentered } from "../../styles/shared";
import { ColorContainer } from "../common/ColorContainer";
import { LogoContainer } from "../common/LogoContainer";
import { CricleIcon } from "../common/CricleIcon";
import { useGameInfo } from "../../hooks/useGameInfo";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SidebarContentStyled = styled.div`
  padding: 10px;
  opacity: 0;
  animation: ${fadeIn} 0.4s;
  animation-fill-mode: forwards;
  animation-delay: 0.8s;
  animation-timing-function: ease-in;
`;

const TopicStyled = styled.h2`
  color: ${(props) => props.theme.colors.bazar};
  font-size: 46px;
  font-weight: 900;
  text-align: center;
  margin: 20px 0;
  padding: 0;
`;

const CenteredContainer = styled.div`
  ${flexCentered}
`;

export const GameInfo = () => {
  const { t } = useTranslation();
  const { topic, score, answerInfoCorrect, answerInfoIncorrect } = useGameInfo();

  return (
    <SidebarContentStyled>
      <LogoContainer />
      <TopicStyled>{topic}</TopicStyled>
      <CenteredContainer>
        <CricleIcon text={score} />
      </CenteredContainer>
      <CenteredContainer>
        {answerInfoCorrect && <ColorContainer>{t("labels.correct")}</ColorContainer>}
        {answerInfoIncorrect && <ColorContainer>{t("labels.incorrect")}</ColorContainer>}
      </CenteredContainer>
    </SidebarContentStyled>
  );
};
