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
  marginBottom: "24px",
});

export const headTitle = style({
  color: tokens.color.textColor,
  fontFamily: "Pretendard",
  fontSize: "20px",
  fontWeight: "700",
  lineHeight: "32px",
});

export const registerBtn = style({
  display: "flex",
  height: "42px",
  padding: "12px 23px",
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  borderRadius: "8px",
  background: tokens.color.primaryColor,
  color: tokens.color.backgroundColor,
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "26px",
  cursor: "pointer",

  selectors: {
    "&:disabled": {
      background: tokens.color.textSecondaryColor,
      cursor: "not-allowed",
      opacity: 0.5,
    },
  },
});

export const label = style({
  display: "block",
  marginTop: "24px",
  marginBottom: "16px",
  color: tokens.color.textColor,
  fontFamily: "Pretendard",
  fontSize: "18px",
  fontWeight: "700",
  lineHeight: "26px",
});

const fieldBase = style({
  display: "flex",
  width: "100%",
  padding: "16px 24px",
  border: "none",
  borderRadius: "12px",
  background: tokens.color.backgroundColor,
  outline: "none",
  fontFamily: "Pretendard",
  fontSize: "16px",
});

export const nameInput = style([fieldBase, { height: "56px" }]);
export const descriptionInput = style([fieldBase, { height: "282px", resize: "none" }]);
export const priceInput = style([fieldBase, { height: "56px" }]);
export const tagInput = style([fieldBase, { height: "56px" }]);

export const fieldError = style({
  border: `1px solid ${tokens.color.dangerColor}`,
});

export const errorMessage = style({
  color: tokens.color.dangerColor,
  fontFamily: "Pretendard",
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "24px",
  marginLeft: "16px",
});

export const tagChipWrapper = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
  marginTop: "14px",
});

export const tagChip = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  height: "36px",
  padding: "6px 12px 6px 16px",
  borderRadius: "26px",
  background: tokens.color.backgroundColor,
});