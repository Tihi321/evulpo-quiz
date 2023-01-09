import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useSummary } from "../../hooks/useSumary";
import { Button } from "../inputs/Button";
import { CricleIcon } from "../common/CricleIcon";
import { flexCentered, innerCenterContainer } from "../../styles/shared";
import { LogoContainer } from "../common/LogoContainer";

const ContainerStyled = styled.div`
  ${innerCenterContainer}
  background-color: ${(props) => props.theme.colors.cashmere};
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const NameStyled = styled.div`
  color: ${(props) => props.theme.colors.bazar};
  font-weight: 700;
  font-size: 16px;
  line-height: 14px;
  padding: 16px 0;
`;

const ButtonContainer = styled.div`
  ${flexCentered}
  flex: 1;
`;

export const Summary = () => {
  const { t } = useTranslation();
  const { score, onReset, name } = useSummary();
  return (
    <ContainerStyled>
      <LogoContainer />
      <ContentStyled>
        <NameStyled>{name}</NameStyled>

        <CricleIcon text={score} />

        <ButtonContainer>
          <Button label={t("labels.retry")} onClick={onReset} size="regular" type="secondary" />
        </ButtonContainer>
      </ContentStyled>
    </ContainerStyled>
  );
};
