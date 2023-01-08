import React, { ReactElement } from "react";
import styled from "styled-components";
import { useTheme } from "../../hooks/useTheme";
import { IStyledProps } from "../../types/layout";
import { RoundIcon } from "../common/RoundIcon";

interface IRoundButtonProps extends IStyledProps {
  checked: boolean;
  value: string | number;
  type?: "primary" | "inactive" | "success" | "error";
  label?: string | ReactElement;
  onClick: (args: { value: string | number; checked: boolean }) => void;
  disabled?: boolean;
}

const getTypeColor = (type: "primary" | "inactive" | "success" | "error", theme: any): string => {
  switch (type) {
    case "inactive":
      return theme.colors.whiteLilac;
    case "success":
      return theme.colors.snowFlurry;
    case "error":
      return theme.colors.waxFlower;
    default:
      return theme.colors.bazar;
  }
};

const ContainerStyled = styled(({ disabled, children, ...rest }) => (
  <div {...rest}>{children}</div>
))`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
`;

const LabelStyled = styled.span`
  font-size: 14px;
`;

export const RoundButton = ({
  label,
  checked,
  value,
  type = "primary",
  disabled = false,
  onClick,
  className,
}: IRoundButtonProps) => {
  const { styledTheme } = useTheme();

  return (
    <ContainerStyled
      disabled={disabled}
      className={`evu--round-button ${className}`}
      aria-label={label}
      role="button"
      onClick={() => {
        if (!disabled) {
          onClick({ value, checked });
        }
      }}
    >
      {label && <LabelStyled className="evu--round-button-label">{label}</LabelStyled>}
      <RoundIcon
        bgColor={checked ? getTypeColor(type, styledTheme) : styledTheme.colors.transparent}
        borderColor={getTypeColor(type, styledTheme)}
      />
    </ContainerStyled>
  );
};
