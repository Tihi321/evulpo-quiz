import React, { useMemo } from "react";
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
    questionSubmitted,
    lastQuestion,
    onSubmit,
    onNext,
    onFinish,
  } = useGame();

  const submitButtonLabel = useMemo(() => {
    if (questionSubmitted && lastQuestion) {
      return t("labels.finish");
    }

    if (questionSubmitted) {
      return t("labels.next");
    }

    return t("labels.submit");
  }, [questionSubmitted, lastQuestion]);

  return (
    <ContainerStyled>
      <QuestionTitle>
        {questionNumber}/{numberOfQuestions}
      </QuestionTitle>
      <QuestionTitle>{questionTitle}</QuestionTitle>
      <RoundButtonGroup selected={selected} items={options} onChange={onAnswerChange} />
      <Button
        label={submitButtonLabel}
        onClick={() => {
          if (questionSubmitted && lastQuestion) {
            onFinish();
            return;
          }

          if (questionSubmitted) {
            onNext();
            return;
          }

          onSubmit();
        }}
        size="small"
        type="secondary"
      />
    </ContainerStyled>
  );
};
