"use client";

import { use } from "react";
import { ArticleItem } from "../ArticleItem";

export default function ArticleList({ recentPromise, limit }) {
  const recentArticles = use(recentPromise);
  console.log("결과 ", recentArticles);

  return (
    <>
      {recentArticles.slice(0, limit).map((recent) => (
        <ArticleItem key={recent.id} {...recent} />
      ))}
    </>
  );
}
