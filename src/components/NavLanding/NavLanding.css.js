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

export const userArea = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

export const userName = style({
  fontSize: "16px",
  fontWeight: 500,
});

export const logoutBtn = style({
  padding: "8px 16px",
  borderRadius: "8px",
  border: "1px solid #D1D5DB",
  backgroundColor: "#fff",
  cursor: "pointer",
  selectors: {
    "&:disabled": { opacity: 0.5, cursor: "not-allowed" },
  },
});

export const authPlaceholder = style({
  width: "88px", // 기존 로그인 버튼 크기에 맞추세요
  height: "42px",
});