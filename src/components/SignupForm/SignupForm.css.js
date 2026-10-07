import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";
import * as loginStyles from "../LoginForm/LoginForm.css.js";

// 로그인 폼이랑 디자인이 거의 동일해서 공통 스타일(submitBtn 제외)은 그대로 재사용합니다.
export const page = loginStyles.page;
export const formBox = loginStyles.formBox;
export const rootBtn = loginStyles.rootBtn;
export const logo = loginStyles.logo;
export const content = loginStyles.content;
export const label = loginStyles.label;
export const wrapPassword = loginStyles.wrapPassword;
export const hideIcon = loginStyles.hideIcon;
export const input = loginStyles.input;
export const passwordInput = loginStyles.passwordInput;
export const easyLogin = loginStyles.easyLogin;
export const easyLoginContent = loginStyles.easyLoginContent;
export const easyLoginText = loginStyles.easyLoginText;
export const easyLoginIcons = loginStyles.easyLoginIcons;
export const socialIconImg = loginStyles.socialIconImg;
export const bottomRow = loginStyles.bottomRow;
export const bottomLink = loginStyles.bottomLink;

// signup.css 원본에서 .btn-register는 primary-color가 아니라 deactive-color(회색)였습니다.
// 아마 "입력값 다 채우기 전엔 비활성화처럼 보이게" 의도였던 것 같아요.
// 입력값 검증 로직 붙이시면 isValid 상태에 따라 tokens.color.primaryColor로 바꿔주는 식으로 쓰시면 됩니다.
export const submitBtn = style({
  width: "100%",
  marginBottom: "24px",
  border: "none",
  height: "56px",
  background: tokens.color.textSecondaryColor, // 원본의 --deactive-color(#9ca3af)에 대응
  borderRadius: "40px",
  color: tokens.color.backgroundColor,
  fontSize: "20px",
  fontWeight: "600",
  fontFamily: "Pretendard",
  cursor: "pointer",
});