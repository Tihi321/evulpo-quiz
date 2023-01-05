import { css } from "styled-components";

import { EBreakpoints, ESide } from "../enums/style";
import { defaultTextColor } from "../themes";
import { media } from "../utils/responsive";
import { bodyResponsiveFontStyles, heading01ResponsiveFontStyles, heading02ResponsiveFontStyles, heading03ResponsiveFontStyles, heading04ResponsiveFontStyles } from "./fonts";

export const coreStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${defaultTextColor}

    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      padding: 55px 30px;
    }
  }

  body {
    ${bodyResponsiveFontStyles(EBreakpoints.MOBILE)};
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      ${bodyResponsiveFontStyles(EBreakpoints.LAPTOP)}
    }
  }
`;

export const headingStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  h1 {
    padding-bottom: 20px;
    ${heading01ResponsiveFontStyles(EBreakpoints.MOBILE)};
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      padding-bottom: 30px;
      ${heading01ResponsiveFontStyles(EBreakpoints.LAPTOP)}
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    padding-bottom: 15px;
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      padding-bottom: 20px;
    }
  }

  h2 {
    ${heading02ResponsiveFontStyles(EBreakpoints.MOBILE)};
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      ${heading02ResponsiveFontStyles(EBreakpoints.LAPTOP)}
    }
  }

  h3 {
    ${heading03ResponsiveFontStyles(EBreakpoints.MOBILE)};
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      ${heading03ResponsiveFontStyles(EBreakpoints.LAPTOP)}
    }
  }

  h4,
  h5,
  h6 {
    ${heading04ResponsiveFontStyles(EBreakpoints.MOBILE)};
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      ${heading04ResponsiveFontStyles(EBreakpoints.LAPTOP)}
    }
  }
`;

export const textStyles = css`
  dl,
  p {
    padding-bottom: 30px;
    margin: 0;
    ${bodyResponsiveFontStyles(EBreakpoints.MOBILE)};
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      ${bodyResponsiveFontStyles(EBreakpoints.LAPTOP)}
    }
  }

  aside {
    padding: 15px;
    margin-bottom: 30px;
    border-radius: 4px;
    ${media(EBreakpoints.LAPTOP, ESide.UP)} {
      padding: 30px;
    }
  }

  code {
    border-radius: 5px;
    padding: 3px 5px;
  }
`;