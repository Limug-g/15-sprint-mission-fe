import { RecentArticle } from '@/components/RecentArticle';
import * as styles from '@/styles/article.css.js'

export default async function articles() {
  

  return (
    <div className={styles.articleWrapper}>
      <section>
        <div>베스트 게시글</div>
        <RecentArticle />
      </section>
      
    </div>
  );
}
