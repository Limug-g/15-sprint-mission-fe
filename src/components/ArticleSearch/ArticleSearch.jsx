"use client";
import { useState } from "react";
import { ArticleList } from "@/components/ArticleList";
import { SearchBar } from "@/components/Searchbar/";
import { ARTICLE_LIMIT } from "@/constants/article";

export default function ArticleSearch({ articlePromise }) {
  const [search, setSearch] = useState("");

  return (
    <>
      <div>
        <SearchBar onSearch={setSearch} />
        <div>드롭다운</div>
      </div>
      <div>
        <ArticleList
          articlePromise={articlePromise}   // 여전히 Promise 그대로 전달
          limit={ARTICLE_LIMIT}
          keyword={search}
          className="list"
        />
      </div>
    </>
  );
}