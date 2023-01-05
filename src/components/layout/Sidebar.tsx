import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { asideBackgroundColor } from "../../themes";
import { Button } from "../common/Button";

const SidebarContainer = styled.nav`
  grid-area: sidebar;
  background-color: ${asideBackgroundColor};
  padding: 1em;
`;

export const Sidebar = () => {
  const { t } = useTranslation();
  return (
    <SidebarContainer>
      <Button onClick={() => console.log("click")} label={t("labels.bookmarks")} />
    </SidebarContainer>
  );
};
