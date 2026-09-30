import { ArticleSearch } from "@/components/ArticleSearch/";

async function getArticleSection() {
  // const response = await fetch(`/api/articles`);
  const response = await fetch(`${process.env.API_URL}/api/articles`);
  if (!response.ok) {
    throw new Error("최신 게시글을 불러오지 못했습니다.");
  }
  return response.json();
}

export default function ArticleSection() {
  const articlePromise = getArticleSection();

  return (
    <section>
      <div>
        <div>게시글</div>
        <button>글쓰기</button>
      </div>
      <div>
        <ArticleSearch articlePromise={articlePromise} />
      </div>
    </section>
  );
}
