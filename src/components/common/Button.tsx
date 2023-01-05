import styled from "styled-components";
import { searchBackgroundColor, searchBorderColor, searchTextColor } from "../../themes";

export const Button = styled.button`
  border: 1px solid ${searchBorderColor};
  background-color: ${searchBackgroundColor};
  color: ${searchTextColor};
  padding: 5px;
  width: 100%;
  cursor: pointer;
`;
