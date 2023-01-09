import React, { useMemo } from "react";
import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";
import { useGame } from "../../hooks/useGame";
import { RoundButtonGroup } from "../inputs/RoundButtonGroup";
import { Button } from "../inputs/Button";
import { flexCentered } from "../../styles/shared";

const textStyle = css`
  color: ${(props) => props.theme.colors.bazar};
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

const ContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
`;

const LabelStyled = styled.div`
  ${textStyle}
`;

const QuestionTitle = styled.h2`
  ${textStyle}
  ${flexCentered}
  height: 200px;
`;

const RoundButtonGroupStyled = styled(RoundButtonGroup)`
  width: 100%;
  flex: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
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
      <LabelStyled>
        {questionNumber}/{numberOfQuestions}
      </LabelStyled>
      <QuestionTitle>{questionTitle}</QuestionTitle>
      <RoundButtonGroupStyled selected={selected} items={options} onChange={onAnswerChange} />
      <ButtonContainer>
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
      </ButtonContainer>
    </ContainerStyled>
  );
};
