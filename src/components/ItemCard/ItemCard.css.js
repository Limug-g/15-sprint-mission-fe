import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

// 미션7의 ArticleItem 패턴과 동일하게, className(variant) 하나로
// "일반 카드(목록)"와 "베스트 카드(크게)" 두 가지 스타일을 모두 처리한다.
export const cardContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "16px",
  width: "221px",
  backgroundColor: tokens.color.articleBackground,
});

export const bestContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "16px",
  width: "282px",
  backgroundColor: tokens.color.articleBackground,
});

export const itemImg = style({
  borderRadius: "13px",
  objectFit: "cover",
});

export const detail = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});

export const name = style({
  color: tokens.color.textColor,
  fontFamily: "Pretendard",
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "24px",
});

export const price = style({
  color: tokens.color.textColor,
  fontFamily: "Pretendard",
  fontSize: "16px",
  fontWeight: "700",
  lineHeight: "26px",
});

export const like = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

export const likeNumber = style({
  color: tokens.color.nameTextColor,
  fontFamily: "Pretendard",
  fontSize: "15px",
  fontWeight: "500",
  lineHeight: "18px",
});