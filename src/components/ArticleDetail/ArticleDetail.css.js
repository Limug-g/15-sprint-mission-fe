import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";



export const header = style({
  margin: "34px 0 24px",
});

export const titleWrap = style({
    display: "flex",
    justifyContent: 'space-between',
})

export const dotMenu = style({
  cursor: "pointer",
});

export const title = style({
  color: tokens.color.textColor,
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "32px",
});

export const info = style({
  margin: "16px 0 16px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
});

export const name = style({
  marginLeft: "16px",
  color: tokens.color.textColor,
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "24px",
});

export const date = style({
  marginLeft: "8px",
  color: tokens.color.textSecondaryColor,
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "24px",
});

export const box = style({
  borderLeft: `1px solid ${tokens.color.borderColor}`,
  marginLeft: "32px",
  paddingLeft: "32px",
});

export const like = style({
  display: "flex",
  alignItems: "center",
  height: "40px",
  gap: '4px',
  padding: '4px 12px',
  borderRadius: '35px',
  border: `1px solid ${tokens.color.borderColor}`,
});

export const likeCount = style({
  color: tokens.color.subtleTextColor,
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "26px",
});

export const content = style({
  marginBottom: "32px",
  color: tokens.color.textColor,
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "26px",
});