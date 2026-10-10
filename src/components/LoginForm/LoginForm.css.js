import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

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

export const inputWrap = style({
  display: "flex",
  flexDirection: "column",
  marginBottom: "24px",
});

export const label = style({
  fontSize: "18px",
  fontWeight: "700",
  color: tokens.color.textColor,
  marginBottom: "16px",
});

export const wrapPassword = style({
  position: "relative",
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

export const errorInput = style({
  width: "100%",
  boxSizing: "border-box",
  backgroundColor: tokens.color.backgroundColor,
  height: "56px",
  padding: "16px 24px",
  borderRadius: "12px",
  outline: "none",
  border: `1px solid ${tokens.color.dangerColor}`,
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
    },
  },
});

// export const passwordInput = style([input]);

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

  selectors: {
    "&:disabled": {
      backgroundColor: tokens.color.textSecondaryColor,
      cursor: "not-allowed",
    },
  },
});

export const easyLogin = style({
  width: "100%",
  height: "74px",
  marginBottom: "24px",
  backgroundColor: tokens.color.subLoginbgcColor,
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

export const modalOverlay = style({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
});

export const modalBox = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",

  backgroundColor: tokens.color.backgroundColor,
  borderRadius: "8px",
  padding: "40px 32px 24px",
  width: "540px",
  height: "250px",
  textAlign: "center",
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
});

export const modalConfirmButton = style({
  width: "100%",
  height: "42px",
  border: "none",
  borderRadius: "8px",
  background: tokens.color.primaryColor,
  color: tokens.color.backgroundColor,
  fontSize: "15px",
  fontWeight: "600",
  fontFamily: "Pretendard",
  cursor: "pointer",
});

export const errorText = style({
  color: tokens.color.dangerColor,
  fontSize: "14px",
  fontWeight: "600",
  fontFamily: "Pretendard",
  lineHeight: "24px",
  marginTop: "8px",
});

export const modalMessage = style({
    color: tokens.color.textColor,
  fontSize: "18px",
  fontWeight: "500",
  fontFamily: "Pretendard",
  lineHeight: "26px",
})

export const checkBtn = style({
  width: "30%",
  border: "none",
  height: "48px",
  padding: "12px 23px",
  background: tokens.color.primaryColor,
  borderRadius: "8px",
  color: tokens.color.backgroundColor,
  fontSize: "16px",
  fontWeight: "600",
  fontFamily: "Pretendard",
  lineHeight: "26px",
  cursor: "pointer",
});
