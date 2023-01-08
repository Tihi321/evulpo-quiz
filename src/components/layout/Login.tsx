import isEmpty from "lodash/isEmpty";
import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { LogoContainer } from "../common/LogoContainer";
import { Input } from "../inputs/Input";
import { Button } from "../inputs/Button";
import { useLogin } from "../../hooks/useLogin";

const ContainerStyled = styled.div`
  padding: 10px;
`;

const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LabelStyled = styled.div`
  color: ${(props) => props.theme.colors.bazar};
  font-weight: 700;
  font-size: 16px;
  line-height: 14px;
  padding: 8px 0;
`;

const ButtonStyled = styled(Button)`
  margin-top: 16px;
`;

export const Login = () => {
  const { t } = useTranslation();
  const [userName, setUserName] = useState("");
  const { register } = useLogin();
  return (
    <ContainerStyled>
      <LogoContainer />
      <ContentStyled>
        <LabelStyled>{t("labels.user_name")}</LabelStyled>
        <Input
          value={userName}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <ButtonStyled
          type={isEmpty(userName) ? "inactive" : "secondary"}
          label={t("labels.submit")}
          onClick={() => {
            register({ name: userName });
          }}
          disabled={isEmpty(userName)}
        />
      </ContentStyled>
    </ContainerStyled>
  );
};
