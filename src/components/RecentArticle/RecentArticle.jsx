import { ArticleList } from "../ArticleList";


export const RECENT_ARTICLE_LIMIT = 4;

async function getRecentArticle(){
  const response = await fetch(`${process.env.API_URL}/api/articles`);

  if(!response.ok){
    throw new Error('최신 게시글을 불러오지 못했습니다.');
  }
  return response.json();
}

export default function RecentArticle(){
  const recentPromise = getRecentArticle();

  return (
    <section>
        <div>
          <div>게시글</div>
          <button>글쓰기</button>
        </div>
        <div>
          <div>검색바 자리</div>
          <div>드롭다운</div>
        </div>
        <div>
          <div>게시글 페이지입니다.</div>
          <ArticleList 
          recentPromise={recentPromise}
          limit={RECENT_ARTICLE_LIMIT} />
        </div>
      </section>
  )
}