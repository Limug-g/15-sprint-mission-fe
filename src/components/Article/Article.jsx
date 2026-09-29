import { notFound } from "next/navigation";

export default async function Article({params}){
  const { id } = await params;

  const response = await fetch(`${process.env.API_URL}/api/articles/${id}`);

  if (response.status === 404) {
    notFound(); //-> next/navigation에서 제공하는 기능
    //직접 만든 not-found.js 를 찾아준다.
  }
  if (!response.ok) {
    return <div>게시글 정보를 불러올 수 없습니다.</div>;
  }

  const article = await response.json();
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
          <div>{article.data.title}</div>
          <div>{article.data.content}</div>
          <div>{article.data.writer.name}</div>
        </div>
      </section>
  )
}