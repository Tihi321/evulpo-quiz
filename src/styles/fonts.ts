import { css } from "styled-components";
import { EBreakpoints } from "../enums/style";
import { EFonts, themeFonts } from "../themes";


const responsiveFontStyles = (key: string, breakpoint: EBreakpoints) => css`
  font-size: ${props => themeFonts(props)[key][breakpoint].fontSize};
  line-height: ${props => themeFonts(props)[key][breakpoint].lineHeight};
  ${props =>
    themeFonts(props)[key][breakpoint].fontWeight &&
    `font-weight: ${themeFonts(props)[key][breakpoint].fontWeight}`};
  ${props =>
    themeFonts(props)[key][breakpoint].fontFamily &&
    `font-family: ${themeFonts(props)[key][breakpoint].fontFamily}`};
`;

export const bodyResponsiveFontStyles = (breakpoint: EBreakpoints) =>
  responsiveFontStyles(EFonts.Body, breakpoint);

export const heading01ResponsiveFontStyles = (breakpoint: EBreakpoints) =>
  responsiveFontStyles(EFonts.Heading01, breakpoint);

export const heading02ResponsiveFontStyles = (breakpoint: EBreakpoints) =>
  responsiveFontStyles(EFonts.Heading02, breakpoint);

export const heading03ResponsiveFontStyles = (breakpoint: EBreakpoints) =>
  responsiveFontStyles(EFonts.Heading03, breakpoint);

export const heading04ResponsiveFontStyles = (breakpoint: EBreakpoints) =>
  responsiveFontStyles(EFonts.Heading04, breakpoint);

export const listResponsiveFontStyles = (breakpoint: EBreakpoints) =>
  responsiveFontStyles(EFonts.List, breakpoint);
