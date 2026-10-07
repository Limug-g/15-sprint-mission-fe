import { tokens } from "@/styles/tokens.css";
import { style } from "@vanilla-extract/css";

export const pagination = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "40px",
  gap: "8px",
});

export const pageBtn = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  backgroundColor: tokens.color.cardBackground,
  border: `1px solid ${tokens.color.borderColor}`,
  color: tokens.color.subtleTextColor,
  padding: "8px",
  cursor: "pointer",
  borderRadius: "50%",
  fontSize: "16px",
  fontWeight: "500",

  selectors: {
    "&:hover": {
      borderColor: tokens.color.primaryColor,
      color: tokens.color.primaryColor,
    },
    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.5,
    },
  },
});

export const activePageBtn = style([
  pageBtn,
  {
    backgroundColor: tokens.color.primaryColor,
    color: "white",
    borderColor: tokens.color.primaryColor,
  },
]);