import { BestArticle } from '@/components/BestArticle';
import { ArticleSection } from '@/components/ArticleSection';

import * as styles from '@/styles/article.css.js'

export default async function articles() {
  

  return (
    <div className={styles.articleWrapper}>
      <section>
        <BestArticle />
        {/* 베스트게시글컴포넌트만들기 */}
        <div>
          <div>게시글</div>
          <button>글쓰기</button>
        </div>
        <div>
          <div>검색바 자리</div>
          <div>드롭다운</div>
        </div>
        <ArticleSection />
      </section>
      
    </div>
  );
}
