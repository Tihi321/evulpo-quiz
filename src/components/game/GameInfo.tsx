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

const LogoContainerStyled = styled(LogoContainer)`
  width: 100%;
`;

const SidebarContentStyled = styled.div`
  padding: 10px;
  opacity: 0;
  animation: ${fadeIn} 0.4s;
  animation-fill-mode: forwards;
  animation-delay: 0.8s;
  animation-timing-function: ease-in;
  display: flex;
  flex-direction: column;
  height: 100%;
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
  flex: 1;
`;

const LabelContainerStyled = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.4s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
`;

const LabelStyled = styled.span`
  display: block;
  min-width: 130px;
  text-align: center;
  padding: 6px;
`;

export const GameInfo = () => {
  const { t } = useTranslation();
  const { topic, score, answerInfoCorrect, answerInfoIncorrect } = useGameInfo();

  return (
    <SidebarContentStyled>
      <LogoContainerStyled />
      <TopicStyled>{topic}</TopicStyled>
      <CenteredContainer>
        <CricleIcon text={score} />
      </CenteredContainer>
      <CenteredContainer>
        {answerInfoCorrect && (
          <LabelContainerStyled>
            <ColorContainer noShadow={true} type="success">
              <LabelStyled>{t("labels.correct")}</LabelStyled>
            </ColorContainer>
          </LabelContainerStyled>
        )}
        {answerInfoIncorrect && (
          <LabelContainerStyled>
            <ColorContainer noShadow={true} type="error">
              <LabelStyled>{t("labels.incorrect")}</LabelStyled>
            </ColorContainer>
          </LabelContainerStyled>
        )}
      </CenteredContainer>
    </SidebarContentStyled>
  );
};
