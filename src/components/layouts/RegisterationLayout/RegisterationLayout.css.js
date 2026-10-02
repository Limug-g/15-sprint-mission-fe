import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '24px auto 0',
  width: '1200px',
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: '32px',
});

export const title = style({
  color: tokens.color.textColor,
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "32px" /* 160% */,
});

export const registerBtn = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "42px",
  padding: "12px 23px",

  borderRadius: "8px",
  background: tokens.color.textSecondaryColor,

  color: tokens.color.backgroundColor,
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "26px" /* 160% */,
});
