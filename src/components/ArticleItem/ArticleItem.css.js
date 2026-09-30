import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  borderBottom: `1px solid ${tokens.color.borderColor}`,
  backgroundColor: tokens.color.articleBackground,
  width: "100%",
  marginBottom: '24px',
});

export const header = style({
  display: "flex",
  gap: "8px",
  justifyContent: "space-between",
  marginBottom: "16px",
});

export const title = style({
  color: tokens.color.textColor,
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "32px" /* 160% */,
});

export const defaultImg = style({
  display: "flex",
  width: "72px",
  height: "72px",
  padding: "13.713px 12px 13.715px 12px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: '8px',
  border: `1px solid ${tokens.color.backgroundColor}`,
  backgroundColor: tokens.color.cardBackground,
});

export const info = style({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "24px",
});

export const userInfo = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const userName = style({
  color: tokens.color.nameTextColor,
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "24px",
});

export const date = style({
  color: tokens.color.textSecondaryColor,
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "24px",
});

export const like = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: tokens.color.subtleTextColor,
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "26px",
});
