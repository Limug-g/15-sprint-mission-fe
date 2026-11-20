import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

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

// 로딩 중에 로그인 버튼 자리를 비워 두어 nav가 흔들리지 않게 한다
export const authPlaceholder = style({
  flexShrink: 0,
  width: "88px",
  height: "42px",
});

export const userMenuWrap = style({
  position: "relative",
  display: "flex",
  flexShrink: 0,
  width: "88px",
  height: "42px",
  justifyContent: "flex-end",
  alignItems: "center",
});

export const profileBtn = style({
  display: "flex",
  padding: 0,
  border: "none",
  borderRadius: "50%",
  background: "none",
  cursor: "pointer",
});

export const profileImg = style({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
});

export const menu = style({
  position: "absolute",
  top: "calc(100% + 8px)",
  right: 0,
  zIndex: 10,
  width: "139px",
  borderRadius: "8px",
  border: `1px solid ${tokens.color.borderSecondColor}`,
  backgroundColor: tokens.color.cardBackground,
  overflow: "hidden",
});

export const menuItem = style({
  width: "100%",
  padding: "12px 0",
  border: "none",
  backgroundColor: tokens.color.cardBackground,
  color: tokens.color.subtleTextColor,
  cursor: "pointer",
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "26px",
  textAlign: "center",
  selectors: {
    "&:hover": { backgroundColor: tokens.color.backgroundColor },
    "&:disabled": { opacity: 0.5, cursor: "not-allowed" },
  },
});
