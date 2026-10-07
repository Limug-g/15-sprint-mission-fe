import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
});

export const header = style({
  color: tokens.color.textColor,
  fontFamily: "Pretendard",
  fontSize: "20px",
  fontWeight: "700",
  lineHeight: "32px",
  marginBottom: "16px",
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  columnGap: "24px",
  marginBottom: "40px",
  listStyle: "none",
  padding: 0,
});