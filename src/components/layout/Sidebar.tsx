import React from "react";
import styled from "styled-components";
import { asideBackgroundColor } from "../../themes";
import { Button } from "../common/Button";

const SidebarContainer = styled.nav`
  grid-area: sidebar;
  background-color: ${asideBackgroundColor};
  padding: 1em;
`;

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <Button onClick={() => console.log("click")}>bookmarks</Button>
    </SidebarContainer>
  );
};
