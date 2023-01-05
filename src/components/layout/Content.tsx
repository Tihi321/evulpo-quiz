import React from "react";
import styled from "styled-components";

export const ContentContainer = styled.main`
  grid-area: content;
  padding: 1em;
`;

export const Content = () => {
  return <ContentContainer>Content</ContentContainer>;
};
