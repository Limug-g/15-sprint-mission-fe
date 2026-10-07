import { NavLanding } from "@/components/NavLanding";
import { LandingSections } from "@/components/LandingSections";
import { Footer } from "@/components/Footer";

// 미션5의 LandingPage.jsx 포팅. 자유게시판/중고마켓 메뉴가 없는 랜딩 전용 nav(NavLanding)를 쓰므로
// app/articles, app/items 처럼 GlobalLayout으로 감싸지 않고 이 페이지에서 직접 구성합니다.
export default function HomePage() {
  return (
    <>
      <NavLanding />
      <LandingSections />
      <Footer />
    </>
  );
}