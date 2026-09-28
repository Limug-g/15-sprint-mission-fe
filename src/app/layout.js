export const metadata = {
  title: "Panda-Market",
  description: "Next.js를 활용한 판다마켓 페이지 구현",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
