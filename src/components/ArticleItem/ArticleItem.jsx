import Image from "next/image";
import Link from "next/link";
import defaultImg from '@/assets/image 71.png'

//게시글 제목, 작성자, 작성날짜, 사진
export default function ArticleItem({ id, title, name, createdAt }) {
  const articleTitle = title;
  const writerName = name;
  const createDate = createdAt;
  return (
    <Link href={`/articles/${id}`}>
      <div>
        <div>{articleTitle}</div>
        <Image src={defaultImg}/>
      </div>
      <div>
        <div>
          <div>{writerName}</div>
          <div>{createDate}</div>
        </div>
        <div>
          하트하트
        </div>
      </div>
    </Link>
  );
}
