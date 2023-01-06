import React, { ReactElement } from "react";
import styled from "styled-components";
import { IStyledProps } from "../../types/layout";

export interface IRoundButtonProps extends IStyledProps {
  checked: boolean;
  value: string;
  type?: "primary" | "inactive" | "success" | "error";
  label?: string | ReactElement;
  onClick: (args: { value: string; checked: boolean }) => void;
  disabled?: boolean;
}

const getTypeColor = (type: "primary" | "inactive" | "success" | "error"): string => {
  switch (type) {
    case "inactive":
      return "#F4E9F7";
    case "success":
      return "#DBFFC8";
    case "error":
      return "#FFB59F";
    default:
      return "#9F7381";
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

const SpanStyled = styled(({ type, checked, children, ...rest }) => (
  <div {...rest}>{children}</div>
))`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${(props) => {
    let bgColor = "transparent";
    const borderColor = getTypeColor(props.type);

    if (props.checked) {
      bgColor = getTypeColor(props.type);
    }

    return `repeating-radial-gradient(circle, ${bgColor} 0%, ${bgColor} 40%, transparent 40%, transparent 55%, ${borderColor} 55%, ${borderColor} 100%)`;
  }};
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
      <SpanStyled checked={checked} type={type} className="evu--round-button-input" />
    </ContainerStyled>
  );
};
