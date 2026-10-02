import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const dropdown = style({
  display: "flex",
  // flexDirection: 'column',
  width: "130px",
  height: "42px",
  padding: "12px 20px",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "15px",
  border: `1px solid ${tokens.color.borderColor}`,
  backgroundColor: tokens.color.cardBackground,

  color: tokens.color.textColor,
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "26px",
});
export const openDrop = style({
  display: "flex",
  // flexDirection: 'column',
  width: "130px",
  height: "42px",
  padding: "12px 20px",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "15px 15px 0 0",
  border: `1px solid ${tokens.color.borderColor}`,
  borderBottom: 'none',
  backgroundColor: tokens.color.cardBackground,

  color: tokens.color.textColor,
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "26px",
});

export const menuA = style({
  display: "flex",
  // flexDirection: 'column',
  width: "130px",
  height: "42px",
  padding: "12px 20px",
  justifyContent: "space-between",
  alignItems: "center",
  border: `1px solid ${tokens.color.borderColor}`,
  borderBottom: 'none',
  backgroundColor: tokens.color.cardBackground,

  color: tokens.color.textColor,
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "26px",
  
});
export const menuB = style({
  display: "flex",
  // flexDirection: 'column',
  width: "130px",
  height: "42px",
  padding: "12px 20px",
  justifyContent: "space-between",
  alignItems: "center",
  border: `1px solid ${tokens.color.borderColor}`,
  borderRadius: "0 0 15px 15px",
  backgroundColor: tokens.color.cardBackground,

  color: tokens.color.textColor,
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "26px",
});
