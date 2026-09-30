import { ArticleList } from "@/components/ArticleList";
import { BEST_ARTICLE_LIMIT } from "@/constants/article";


async function getBestArticle(){
  const response = await fetch(`${process.env.API_URL}/api/articles`);

  if(!response.ok){
    throw new Error('인기 게시글을 불러오지 못했습니다.');
  }
  return response.json();
}

export default function BestArticle(){
  const bestPromise = getBestArticle();

  return (
      <section>
          <div>
            <ArticleList 
            articlePromise={bestPromise}
            limit={BEST_ARTICLE_LIMIT}
            className = 'card'
            />
          </div>
        </section>
    )
}