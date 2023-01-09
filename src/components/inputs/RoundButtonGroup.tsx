import isEqual from "lodash/isEqual";
import get from "lodash/get";
import uniqueId from "lodash/uniqueId";
import map from "lodash/map";
import React from "react";
import styled from "styled-components";

import { RoundButton } from "./RoundButton";
import { IStyledProps } from "../../types/layout";
import { ColorContainer } from "../common/ColorContainer";

export type TRoundButtonItem = {
  value: string | number;
  label?: string;
  disabled?: boolean;
  type?: "primary" | "inactive" | "success" | "error";
};

interface IRoundButtonGroupProps extends IStyledProps {
  items: Array<TRoundButtonItem>;
  selected: string | number;
  id?: string;
  disabled?: boolean;
  type?: "primary" | "inactive" | "success" | "error";
  onChange: (args: { value: string | number; checked: boolean }) => void;
}

const ContainerStyled = styled(({ side, children, ...rest }) => <div {...rest}>{children}</div>)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  flex-direction: column;
  width: fit-content;

  .evu--round-button-label {
    margin: 0 16px;
  }
`;

const RoundButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 8px;
  width: 100%;

  .evu--color-container {
    width: auto;
  }

  .evu--round-button {
    width: 100%;
  }

  .evu--round-button-label {
    flex: 1;
  }
`;

const ColorContainerStyled = styled(ColorContainer)`
  color: #9f7381;
  border-radius: 6px;
  padding: 8px;
  width: 160px;
  font-size: 16px;
  font-weight: bold;
`;

export const RoundButtonGroup = ({
  items,
  id = uniqueId(),
  selected,
  disabled,
  type = "primary",
  onChange,
  className,
}: IRoundButtonGroupProps) => {
  return (
    <ContainerStyled className={className}>
      {map(items, (values, index) => (
        <RoundButtonContainer key={`${id}-${index}`}>
          {index + 1}.{" "}
          <RoundButton
            onClick={(values) => {
              if (!get(values, ["checked"])) {
                onChange(values);
              }
            }}
            label={
              <ColorContainerStyled
                type={get(values, ["type"]) || type}
                noShadow={disabled || get(values, ["disabled"])}
              >
                {get(values, ["label"])}
              </ColorContainerStyled>
            }
            checked={isEqual(get(values, ["value"]), selected)}
            value={get(values, ["value"])}
            type={get(values, ["type"]) || type}
            disabled={disabled || get(values, ["disabled"])}
          />
        </RoundButtonContainer>
      ))}
    </ContainerStyled>
  );
};
