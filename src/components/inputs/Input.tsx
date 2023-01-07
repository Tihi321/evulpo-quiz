import styled from "styled-components";

export const Input = styled.input`
  border-radius: 8px;
  color: ${(props) => props.theme.colors.cosmic};
  background-color: ${(props) => props.theme.colors.whiteLilac};
  border: 1px solid ${(props) => props.theme.colors.cosmic};
  padding: 8px;
  text-align: center;
  font-weight: bold;
  outline: none;
`;
