import * as styles from "@/styles/article.css.js";
import { notFound } from "next/navigation";


export default async function articlePage({ params }) {
  const { id } = await params;

  const response = await fetch(`${process.env.API_URL}/api/articles/${id}`);
  console.log('뜬거아냐?', response);
  if (response.status === 404) {
    notFound(); //-> next/navigation에서 제공하는 기능
    //직접 만든 not-found.js 를 찾아준다.
  }
  if (!response.ok) {
    return <div>게시글 정보를 불러올 수 없습니다.</div>;
  }

  const article = await response.json();

  return (
    <div className={styles.articleWrapper}>
      <section>
        <div>{id}번 게시글</div>
        <div>{article.data.title}</div>
        <div>{article.data.content}</div>
        <div>{article.data.writer.name}</div>
      </section>
    </div>
  );
}
