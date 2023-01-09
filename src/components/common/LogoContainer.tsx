import React from "react";
import styled from "styled-components";
import { Logo } from "./Logo";

const ContainerStyled = styled.div`
  padding: 50px 10px;
  width: 80%;
`;

const LogoStyled = styled(Logo)`
  width: 100%;
  height: auto;
`;

export const LogoContainer = ({ ...rest }) => {
  return (
    <ContainerStyled {...rest}>
      <LogoStyled />
    </ContainerStyled>
  );
};
