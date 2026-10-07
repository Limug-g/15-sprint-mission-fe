"use client";

import { ItemCard } from "@/components/ItemCard";
import { useItems } from "@/hook/useItems";
import { BEST_ITEM_LIMIT } from "@/constants/item";
import * as styles from "./ItemBestSection.css.js";

// 미션5의 PostBestList를 그대로 포팅. "좋아요 순" 상위 4개만 보여준다.
export default function ItemBestSection() {
  const { items } = useItems({ limit: BEST_ITEM_LIMIT, orderBy: "favorite" });

  return (
    <div className={styles.container}>
      <div className={styles.header}>베스트 상품</div>
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.id}>
            <ItemCard {...item} variant="best" />
          </li>
        ))}
      </ul>
    </div>
  );
}