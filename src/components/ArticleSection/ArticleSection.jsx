import { ArticleList } from "@/components/ArticleList";

export const ARTICLE_LIMIT = 4;

async function getArticleSection() {
  const response = await fetch(`${process.env.API_URL}/api/articles`);

  if (!response.ok) {
    throw new Error("최신 게시글을 불러오지 못했습니다.");
  }
  return response.json();
}

export default function ArticleSection() {
  const recentPromise = getArticleSection();
  return (
    <section>
      <div>
        <ArticleList
          articlePromise={recentPromise}
          limit={ARTICLE_LIMIT}
          className = 'list'
        />
      </div>
    </section>
  );
}
