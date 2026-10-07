"use client";

import { useState } from "react";
import Link from "next/link";
import { ItemCard } from "@/components/ItemCard";
import { Pagination } from "@/components/Pagination";
import { SearchBar } from "@/components/Searchbar"; // 미션7에 이미 있는 디바운스 검색창 재사용
import { useItems } from "@/hook/useItems";
import { ITEM_LIMIT } from "@/constants/item";
import * as styles from "./ItemListSection.css.js";

// 미션5의 PostList를 포팅. 다만 fetch를 직접 하지 않고
// useItems 훅 -> /api/items (BFF) 를 통해서만 데이터를 받아온다.
export default function ItemListSection() {
  const [orderBy, setOrderBy] = useState("recent");
  const [keyword, setKeyword] = useState("");

  const { items, nowPage, totalPages, goToPage } = useItems({
    limit: ITEM_LIMIT,
    orderBy,
    keyword,
  });

  const handleOrderChange = (event) => {
    setOrderBy(event.target.value);
  };

  return (
    <section className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>판매 중인 상품</h2>
          <div className={styles.listHandle}>
            <SearchBar onSearch={setKeyword} />
            <Link href="/items/registration" className={styles.registerBtn}>
              상품 등록하기
            </Link>
            <select
              className={styles.dropDown}
              value={orderBy}
              onChange={handleOrderChange}
            >
              <option value="recent">최신 순</option>
              <option value="favorite">좋아요 순</option>
            </select>
          </div>
        </div>

        <ul className={styles.grid}>
          {items.map((item) => (
            <li key={item.id}>
              <ItemCard {...item} />
            </li>
          ))}
        </ul>

        <Pagination
          nowPage={nowPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      </div>
    </section>
  );
}