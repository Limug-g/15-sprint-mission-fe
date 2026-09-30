export const RECENT_ARTICLE_LIMIT = 4;

async function getRecentArticle(){
  const response = await fetch(`${process.env.API_URL}/api/articles`);

  if(!response.ok){
    throw new Error('최신 게시글을 불러오지 못했습니다.');
  }
  return response.json();
}

export default function BestArticle(){
  return <div>베스트게시글입니다.</div>
}