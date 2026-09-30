"use client";

import { use } from "react";
import { ArticleItem } from "@/components/ArticleItem";
import * as styles from './ArticleList.css'

export default function ArticleList({ articlePromise, limit, className }) {
  const articles = use(articlePromise);
  console.log("결과 ", articles);
  const listVariant = className === 'list' ? '' : styles.cardContainer;

  return (
    <div className={listVariant}>
      {articles.slice(0, limit).map((article) => (
        <ArticleItem key={article.id} {...article} className={className} />
      ))}
    </div>
  );
}
