import * as styles from './RegisterationLayout.css.js';

export default async function RegistrationLayout({ children }) {

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>게시글 쓰기</div>
        <button className={styles.registerBtn}>등록</button>
      </div>
      <div>
        {children}
      </div>
    </section>
  );
}
