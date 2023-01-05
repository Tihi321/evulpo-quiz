import { EBreakpoints } from "../../enums/style";

export enum EFonts {
  Body = "body",
  Heading01 = "heading01",
  Heading02 = "heading02",
  Heading03 = "heading03",
  Heading04 = "heading04",
  List = "list",
}

export const fonts = {
  [EFonts.Body]: {
    [EBreakpoints.MOBILE]: {
      fontSize: "16px",
      fontFamily: "Lato",
      fontWeight: "400",
      lineHeight: "1.4"
    },
    [EBreakpoints.LAPTOP]: {
      fontSize: "18px",
      lineHeight: "1.625"
    }
  },
  [EFonts.Heading01]: {
    [EBreakpoints.MOBILE]: {
      fontSize: "26px",
      fontWeight: "700",
      lineHeight: "1.1"
    },
    [EBreakpoints.LAPTOP]: {
      fontSize: "36px",
      lineHeight: "1.2"
    }
  },
  [EFonts.Heading02]: {
    [EBreakpoints.MOBILE]: {
      fontSize: "22px",
      fontWeight: "700",
      lineHeight: "1.2"
    },
    [EBreakpoints.LAPTOP]: {
      fontSize: "28px",
      lineHeight: "1.3"
    }
  },
  [EFonts.Heading03]: {
    [EBreakpoints.MOBILE]: {
      fontSize: "18px",
      fontWeight: "700",
      lineHeight: "1.2"
    },
    [EBreakpoints.LAPTOP]: {
      fontSize: "23px",
      lineHeight: "1.4"
    }
  },
  [EFonts.Heading04]: {
    [EBreakpoints.MOBILE]: {
      fontSize: "16px",
      fontWeight: "700",
      lineHeight: "1.2"
    },
    [EBreakpoints.LAPTOP]: {
      fontSize: "18px",
      lineHeight: "1.5"
    }
  }
};
