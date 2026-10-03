import Image from "next/image";
import profileImg from "@/assets/ic_profile.svg";
import heartImg from "@/assets/ic_heart.svg";
import dotMenu from "@/assets/ic_kebab.svg";
import * as styles from "./ArticleDetail.css.js";

export default function ArticleDetail({ article }) {
  const date = new Date(article.data.createdAt).toLocaleDateString();

  return (
    <>
      <div className={styles.header}>
        <div className={styles.titleWrap}>
          <div className={styles.title}>{article.data.title}</div>
          <Image
            src={dotMenu}
            alt="dotMenu"
            className={styles.dotMenu}
            width={24}
          />
        </div>
        <div className={styles.info}>
          <Image src={profileImg} alt="profileImg" width={40} height={40} />
          <div className={styles.name}>{article.data.writer.name}</div>
          <div className={styles.date}>{date}</div>
          <div className={styles.box}>
            <div className={styles.like}>
              <Image src={heartImg} alt="heartImg" width={32} height={32} />
              <div className={styles.likeCount}>999</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div>{article.data.content}</div>
      </div>
    </>
  );
}
