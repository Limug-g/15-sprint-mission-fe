import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";


const textStyle = style({
  color: tokens.color.textSecondaryColor,
  /* pretendard/xl-20px-semibold */
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "26px",
})

export const container = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

export const title = style({
  display: "flex",
  height: "56px",
  padding: "16px 24px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "10px",
  flexShrink: 0,

  borderRadius: "12px",
  outline: 'none',
  border: 'none',
  background: tokens.color.backgroundColor,
  textStyle,
  margin: '12px 0 24px'
})
export const content = style({
  display: "flex",
  height: '282px',
  padding: "16px 24px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "10px",
  flexShrink: 0,

  borderRadius: "12px",
  outline: 'none',
  border: 'none',
  background: tokens.color.backgroundColor,
  textStyle,
  margin: '12px 0 24px'
})
