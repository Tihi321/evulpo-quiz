import { Breakpoints, EBreakpoints, ESide } from "../enums/style";
import { media } from "./responsive";

test("It should return correct media string for size in desktop range", () => {
  const mediaString = `@media (min-width: ${
    Breakpoints[EBreakpoints.DESKTOP][0]
  }px) and (max-width: ${Breakpoints[EBreakpoints.DESKTOP][1]}px)`;
  expect(media(EBreakpoints.DESKTOP, ESide.MIDDLE)).toBe(mediaString);
});

test("It should return correct media string for laptop size to the bottom", () => {
  const mediaString = `@media (max-width: ${
    Breakpoints[EBreakpoints.LAPTOP][1]
  }px)`;
  expect(media(EBreakpoints.LAPTOP, ESide.DOWN)).toBe(mediaString);
});

test("It should return correct media string for mobile size and up", () => {
  const mediaString = `@media (min-width: ${
    Breakpoints[EBreakpoints.MOBILE][0]
  }px)`;
  expect(media(EBreakpoints.MOBILE, ESide.UP)).toBe(mediaString);
});
