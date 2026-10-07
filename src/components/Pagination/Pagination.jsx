"use client";

import Image from "next/image";
import prevBtn from "@/assets/arrow_left.svg";
import nextBtn from "@/assets/arrow_right.svg";
import * as styles from "./Pagination.css.js";

const PAGE_PER_GROUP = 5;

export default function Pagination({ nowPage, totalPages, onPageChange }) {
  const nowGroup = Math.ceil(nowPage / PAGE_PER_GROUP);
  const startPage = (nowGroup - 1) * PAGE_PER_GROUP + 1;
  const endPage = Math.min(startPage + PAGE_PER_GROUP - 1, totalPages);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      <button
        type="button"
        className={styles.pageBtn}
        onClick={() => onPageChange(nowPage - 1)}
        disabled={nowPage === 1}
      >
        <Image src={prevBtn} alt="이전 페이지" />
      </button>

      {pageNumbers.map((pageNum) => (
        <button
          key={pageNum}
          type="button"
          onClick={() => onPageChange(pageNum)}
          className={nowPage === pageNum ? styles.activePageBtn : styles.pageBtn}
          aria-current={nowPage === pageNum ? "page" : undefined}
        >
          {pageNum}
        </button>
      ))}

      <button
        type="button"
        className={styles.pageBtn}
        onClick={() => onPageChange(nowPage + 1)}
        disabled={nowPage === totalPages}
      >
        <Image src={nextBtn} alt="다음 페이지" />
      </button>
    </div>
  );
}