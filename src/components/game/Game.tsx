import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useGame } from "../../hooks/useGame";
import { RoundButtonGroup } from "../inputs/RoundButtonGroup";
import { Button } from "../inputs/Button";

const ContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
`;

const QuestionTitle = styled.h2`
  color: ${(props) => props.theme.colors.bazar};
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

export const Game = () => {
  const { t } = useTranslation();
  const {
    questionTitle,
    questionNumber,
    numberOfQuestions,
    options,
    onAnswerChange,
    selected,
    onSubmit,
  } = useGame();

  return (
    <ContainerStyled>
      <QuestionTitle>
        {questionNumber}/{numberOfQuestions}
      </QuestionTitle>
      <QuestionTitle>{questionTitle}</QuestionTitle>
      <RoundButtonGroup selected={selected} items={options} onChange={onAnswerChange} />
      <Button label={t("labels.next")} onClick={onSubmit} size="small" type="secondary" />
    </ContainerStyled>
  );
};
