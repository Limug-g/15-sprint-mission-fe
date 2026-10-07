import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

// login.css 포팅. :root 변수 중 기존 tokens와 겹치는 건 tokens.color.*를 쓰고,
// 이 페이지에만 쓰이는 색(간편 로그인 배경 #e6f2ff)은 그대로 하드코딩했습니다.
const EASY_LOGIN_BG = "#e6f2ff";

export const page = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
});

export const formBox = style({
  width: "640px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const rootBtn = style({
  marginBottom: "40px",
});

export const logo = style({
  width: "396px",
  height: "132px",
});

export const content = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

export const label = style({
  fontSize: "18px",
  fontWeight: "700",
  color: tokens.color.textColor,
  marginBottom: "16px",
});

export const wrapPassword = style({
  position: "relative",
  marginBottom: "24px",
});

export const hideIcon = style({
  position: "absolute",
  top: "50%",
  right: "24px",
  transform: "translateY(-50%)",
  cursor: "pointer",
});

export const input = style({
  width: "100%",
  boxSizing: "border-box",
  backgroundColor: tokens.color.backgroundColor,
  height: "56px",
  padding: "16px 24px",
  borderRadius: "12px",
  border: "none",
  marginBottom: "24px",
  fontSize: "16px",
  fontFamily: "Pretendard",

  selectors: {
    "&::placeholder": {
      fontSize: "16px",
      fontWeight: "400",
      color: tokens.color.textSecondaryColor,
    },
    "&:focus": {
      outline: "none",
      border: `1px solid ${tokens.color.primaryColor}`,
    },
  },
});

export const passwordInput = style([input, { marginBottom: 0 }]);

export const submitBtn = style({
  width: "100%",
  marginBottom: "24px",
  border: "none",
  height: "56px",
  background: tokens.color.primaryColor,
  borderRadius: "40px",
  color: tokens.color.backgroundColor,
  fontSize: "20px",
  fontWeight: "600",
  fontFamily: "Pretendard",
  cursor: "pointer",
});

export const easyLogin = style({
  width: "100%",
  height: "74px",
  marginBottom: "24px",
  backgroundColor: EASY_LOGIN_BG,
  borderRadius: "8px",
  padding: "16px 23px",
});

export const easyLoginContent = style({
  display: "flex",
  height: "100%",
  justifyContent: "space-between",
  alignItems: "center",
});

export const easyLoginText = style({
  fontSize: "16px",
  fontWeight: "500",
  color: tokens.color.textColor,
});

export const easyLoginIcons = style({
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  height: "100%",
});

export const socialIconImg = style({
  width: "42px",
  height: "auto",
});

export const bottomRow = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "4px",
  fontSize: "14px",
  fontWeight: "500",
  color: tokens.color.textColor,
});

export const bottomLink = style({
  fontSize: "14px",
  fontWeight: "500",
  color: tokens.color.primaryColor,
  margin: "3.5px 0",
});