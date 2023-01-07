import React from "react";
import styled from "styled-components";
import { Logo } from "./Logo";

const ContainerStyled = styled.div`
  padding: 50px 10px;
  max-width: 400px;
  margin: auto;
`;

const LogoStyled = styled(Logo)`
  width: 100%;
  height: auto;
`;

export const LogoContainer = () => {
  return (
    <ContainerStyled>
      <LogoStyled />
    </ContainerStyled>
  );
};
