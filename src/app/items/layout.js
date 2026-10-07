import GlobalLayout from "@/components/layouts/GlobalLayout/GlobalLayout";

export const metadata = {
  title: "Panda-Market | 중고마켓",
  description: "Next.js를 활용한 판다마켓 중고마켓 페이지 구현",
};

export default function ItemsLayout({ children }) {
  return <GlobalLayout>{children}</GlobalLayout>;
}