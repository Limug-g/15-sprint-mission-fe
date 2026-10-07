import { style } from "@vanilla-extract/css";

// 미션5의 LandingPage.css를 vanilla-extract로 포팅.
// background-image(url(...)) 대신 next/image <Image>로 그림을 직접 배치하는 방식으로 바꿨습니다
// (vanilla-extract에서 이미지를 CSS background-image url()로 쓰려면 별도 로더 설정이 필요해서,
//  더 안전한 next/image 방식을 택했습니다). 레이아웃 치수(width/height)는 원본 값을 그대로 유지했습니다.

export const section01 = style({
  height: "33.75rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  backgroundColor: "#cfe5ff",
  "@media": {
    "(max-width: 1024px)": { height: "771px", alignItems: "center", marginBottom: "24px" },
    "(max-width: 480px)": { height: "540px", alignItems: "center", marginBottom: "24px" },
  },
});

export const wrapSection01 = style({
  maxWidth: "69.375rem",
  width: "100%",
  height: "21.25rem",
  display: "flex",
  alignItems: "center",
  margin: "0 auto",
  "@media": {
    "(max-width: 1024px)": { height: "100%", flexDirection: "column", justifyContent: "space-between" },
  },
});

export const goitem = style({
  width: "22.3125rem",
  height: "16.25rem",
  margin: "2.5rem 0.4375rem 2.5rem 0",
  "@media": {
    "(max-width: 1024px)": { marginTop: "84px" },
  },
});

export const content01 = style({
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  height: "7rem",
  fontSize: "2.5rem",
  fontWeight: 700,
  color: "#374151",
  marginBottom: "2rem",
  whiteSpace: "nowrap",
});

export const goButton = style({
  border: "none",
  background: "none",
  padding: 0,
});

export const goButtonInner = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#3692ff",
  width: "100%",
  height: "3.5rem",
  borderRadius: "2.5rem",
  fontSize: "1.25rem",
  color: "#f9fafb",
  textDecoration: "none",
});

const sectionBase = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "45rem",
  backgroundColor: "#fff",
  "@media": {
    "(max-width: 1024px)": { height: "708px", alignItems: "center", margin: "0 24px", marginBottom: "24px" },
    "(max-width: 480px)": { height: "415px", alignItems: "center", margin: "0 24px", marginBottom: "40px" },
  },
});

export const section02 = sectionBase;
export const section03 = sectionBase;
export const section04 = style([sectionBase, { marginBottom: "8.625rem" }]);

export const wrapSection02 = style({
  backgroundColor: "#fcfcfc",
  maxWidth: "61.875rem",
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: "0 1.9375rem",
  margin: "0 auto",
  "@media": {
    "(max-width: 1024px)": { height: "100%", flexDirection: "column", justifyContent: "space-between" },
  },
});

export const wrapSection03 = style({
  backgroundColor: "#fcfcfc",
  maxWidth: "61.875rem",
  width: "100%",
  display: "flex",
  flexDirection: "row-reverse",
  alignItems: "center",
  padding: "0 0.6rem",
  "@media": {
    "(max-width: 1024px)": { height: "100%", flexDirection: "column", justifyContent: "space-between" },
  },
});

export const wrapSection04 = style({
  backgroundColor: "#fcfcfc",
  maxWidth: "61.875rem",
  width: "100%",
  display: "flex",
  alignItems: "center",
  "@media": {
    "(max-width: 1024px)": { height: "100%", flexDirection: "column", justifyContent: "space-between" },
  },
});

export const sectionImg = style({
  maxWidth: "100%",
  flexShrink: 0,
});

export const goitem02 = style({
  width: "17.125rem",
  height: "14.875rem",
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
});
export const goitem03 = style({
  width: "20.9375rem",
  height: "14.875rem",
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
});
export const goitem04 = style({
  width: "19.8125rem",
  height: "14.875rem",
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
});

export const badge = style({
  height: "1.625rem",
  marginBottom: "0.75rem",
  color: "#3692ff",
  fontSize: "1.125rem",
  fontWeight: 700,
});

export const contentBig = style({
  height: "7rem",
  marginBottom: "1.5rem",
  color: "#374151",
  fontSize: "2.5rem",
  fontWeight: 700,
});

export const contentSmall = style({
  color: "#374151",
  fontSize: "1.5rem",
  fontWeight: 500,
  whiteSpace: "nowrap",
});

export const section05 = style({
  height: "33.75rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  backgroundColor: "#cfe5ff",
  "@media": {
    "(max-width: 1024px)": { height: "927px", alignItems: "center", marginTop: "56px" },
    "(max-width: 480px)": { height: "540px", alignItems: "center", marginTop: "83px" },
  },
});

export const wrapSection05 = style({
  maxWidth: "69.375rem",
  width: "100%",
  height: "24.8125rem",
  display: "flex",
  alignItems: "center",
  "@media": {
    "(max-width: 1024px)": { height: "100%", flexDirection: "column", justifyContent: "space-between" },
  },
});

export const goitem05 = style({
  width: "18.4375rem",
  height: "10.75rem",
  marginRight: "4.3125rem",
  "@media": {
    "(max-width: 1024px)": { marginTop: "201px" },
  },
});