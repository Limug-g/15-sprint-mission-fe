import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  margin: "24px auto 140px",
  width: "1200px",
});

export const imageBox = style({
  borderRadius: "16px",
  objectFit: "cover",
  marginBottom: "24px",
});

export const title = style({
  color: tokens.color.textColor,
  fontFamily: "Pretendard",
  fontSize: "24px",
  fontWeight: "700",
  lineHeight: "32px",
  marginBottom: "16px",
});

export const price = style({
  color: tokens.color.textColor,
  fontFamily: "Pretendard",
  fontSize: "20px",
  fontWeight: "700",
  marginBottom: "16px",
});

export const description = style({
  color: tokens.color.textColor,
  fontFamily: "Pretendard",
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "24px",
});

export const tagWrapper = style({
  display: "flex",
  gap: "8px",
  marginBottom: "24px",
});

export const tagChip = style({
  padding: "6px 12px",
  borderRadius: "26px",
  background: tokens.color.backgroundColor,
  color: tokens.color.nameTextColor,
  fontSize: "14px",
});

export const like = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: tokens.color.subtleTextColor,
});

export const returnBtn = style({
  display: "inline-block",
  marginTop: "32px",
  color: tokens.color.primaryColor,
  textDecoration: "none",
});