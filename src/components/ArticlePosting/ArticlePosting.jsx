import * as styles from './ArticlePosting.css.js';

export default function ArticlePosting() {
  return (
    <section className={styles.container}>
      <label htmlFor="title">* 제목</label>
      <input id='title' type="text" className={styles.title} placeholder='제목을 입력해주세요'/>
      <label htmlFor="title">* 내용</label>
      <textarea id='title' className={styles.content} placeholder='내용을 입력해주세요'/>
    </section>
  );
}
