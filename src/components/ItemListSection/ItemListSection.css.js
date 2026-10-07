import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const wrap = style({
  display: "flex",
  justifyContent: "center",
  margin: "26px 0 140px",
});

export const container = style({
  width: "1200px",
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginBottom: "24px",
});

export const title = style({
  color: tokens.color.textColor,
  fontFamily: "Pretendard",
  fontSize: "20px",
  fontWeight: "700",
  lineHeight: "32px",
});

export const listHandle = style({
  display: "flex",
  justifyContent: 'flex-end',
  alignItems: "center",
  width: "65%",
  gap: "12px",
});

export const registerBtn = style({
  display: "flex",
  flexShrink: 0,
  height: "42px",
  padding: "12px 23px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  background: tokens.color.primaryColor,
  color: tokens.color.backgroundColor,
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "26px",
  textDecoration: "none",
  cursor: "pointer",
  whiteSpace: "nowrap",

  selectors: {
    "&:hover": {
      background: tokens.color.primaryColorHover,
    },
  },
});

export const dropDown = style({
  display: "flex",
  width: "130px",
  height: "42px",
  padding: "12px 20px",
  borderRadius: "12px",
  border: `1px solid ${tokens.color.borderColor}`,
  background: "#fff",
  boxSizing: 'border-box',
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  columnGap: "24px",
  rowGap: "40px",
  listStyle: "none",
  padding: 0,
});
