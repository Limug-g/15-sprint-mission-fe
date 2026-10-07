import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const nav = style({
  display: "flex",
  justifyContent: "space-around",
  padding: "20px 200px",
  borderBottom: "1px solid #dfdfdf",
  background: "#fefefe",
});

export const navContainer = style({
  display: "flex",
  width: "100%",
  alignItems: "center",
});

export const logoImg = style({
  display: "flex",
  cursor: "pointer",
});

export const login = style({
  display: "flex",
  flexShrink: 0,
  width: "88px",
  height: "42px",
  padding: "12px 23px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  background: tokens.color.primaryColor,
  color: tokens.color.backgroundColor,
  cursor: "pointer",
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "26px",
});