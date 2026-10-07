"use client";

import { useState, useEffect } from "react";

// 미션7의 BFF 패턴을 그대로 따름: 클라이언트는 외부 백엔드를 직접 호출하지 않고
// 항상 우리 서버의 /api/items (pages/api/items.js) 를 통해서만 데이터를 받아온다.
export function useItems({ initialPage = 1, limit, orderBy = "recent", keyword = "" }) {
  const [items, setItems] = useState([]);
  const [nowPage, setNowPage] = useState(initialPage);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const totalPages = Math.max(1, Math.ceil(totalCount / limit));

  useEffect(() => {
    const controller = new AbortController();

    const getItems = async () => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams({
          page: nowPage,
          pageSize: limit,
          orderBy,
          keyword,
        });

        const response = await fetch(`/api/items?${params.toString()}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("상품을 불러오는데 실패했습니다.");
        }

        const { list, totalCount } = await response.json();
        setItems(list);
        setTotalCount(totalCount);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.log("에러 발생", error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getItems();
    return () => controller.abort();
  }, [nowPage, limit, orderBy, keyword]);

  const goToPage = (herePage) => {
    if (herePage <= 0 || herePage > totalPages) {
      console.log("잘못된 페이지 수 입니다.");
      return;
    }
    setNowPage(herePage);
  };

  return { items, nowPage, totalPages, goToPage, isLoading };
}