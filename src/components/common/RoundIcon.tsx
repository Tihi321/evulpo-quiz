import React from "react";
import styled from "styled-components";

export interface IRoundIconProps {
  bgColor: string;
  borderColor: string;
}

const SpanStyled = styled(({ bgColor, borderColor, ...rest }) => <div {...rest} />)`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${({ bgColor, borderColor }) =>
    `repeating-radial-gradient(circle, ${bgColor} 0%, ${bgColor} 40%, transparent 40%, transparent 55%, ${borderColor} 55%, ${borderColor} 100%)`};
`;

export const RoundIcon = ({ bgColor, borderColor, ...rest }: IRoundIconProps) => {
  return (
    <SpanStyled bgColor={bgColor} borderColor={borderColor} className="evu--round-icon" {...rest} />
  );
};
