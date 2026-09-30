import { ArticleList } from "@/components/ArticleList";

export const RECENT_ARTICLE_LIMIT = 4;

async function getRecentArticle() {
  const response = await fetch(`${process.env.API_URL}/api/articles`);

  if (!response.ok) {
    throw new Error("최신 게시글을 불러오지 못했습니다.");
  }
  return response.json();
}

export default function RecentArticle() {
  const recentPromise = getRecentArticle();
  return (
    <section>
      <div>
        {console.log("넘기기 직전:", recentPromise)}
        <ArticleList
          articlePromise={recentPromise}
          limit={RECENT_ARTICLE_LIMIT}
          className = 'list'
        />
      </div>
    </section>
  );
}
