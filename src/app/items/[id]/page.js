import { notFound } from "next/navigation";
import { ItemDetail } from "@/components/ItemDetail";

// 미션7의 app/articles/[id]/page.js 패턴 그대로.
// 서버 컴포넌트에서 process.env.API_URL로 "직접" 백엔드를 호출한다(BFF를 거치지 않음).
// -> 클라이언트 fetch만 /api/items를 거치고, 서버 컴포넌트는 기존 패턴처럼 직접 호출.
export default async function ItemDetailPage({ params }) {
  const { id } = await params;

  const response = await fetch(`${process.env.API_URL}/api/items/${id}`);

  if (response.status === 404) {
    notFound();
  }
  if (!response.ok) {
    return <div>상품 정보를 불러올 수 없습니다.</div>;
  }

  const result = await response.json();
  const item = result.data ?? result; // 백엔드 응답이 { data: {...} } 형태인지 바로 객체인지에 맞춰 조정하세요.

  return <ItemDetail item={item} />;
}