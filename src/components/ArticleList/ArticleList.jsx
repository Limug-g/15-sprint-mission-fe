"use client";

import { use } from "react";
import { ArticleItem } from "@/components/ArticleItem";
import * as styles from "./ArticleList.css";

export default function ArticleList({
  articlePromise,
  limit,
  keyword,
  className,
}) {
  const articles = use(articlePromise);

  const listVariant = className === "list" ? "" : styles.cardContainer;

  const filtered = keyword
    ? articles.filter((a) => a.title.includes(keyword))
    : articles;

  return (
    <div className={listVariant}>
      {filtered.slice(0, limit).map((article) => (
        <ArticleItem key={article.id} {...article} className={className} />
      ))}
    </div>
  );
}
