import "@/styles/reset.css.js";
import "@/styles/globals.css.js";
import QueryProvider from "@/providers/QueryProviders";

export const metadata = {
  title: "Panda-Market",
  description: "Next.js를 활용한 판다마켓 페이지 구현",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
