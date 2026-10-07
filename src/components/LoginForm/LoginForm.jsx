import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import hidePWIcon from "@/assets/hidePW.svg";
import socialIcon from "@/assets/ic_social.svg";
import * as styles from "./LoginForm.css.js";

export default function LoginForm() {
  return (
    <form className={styles.formBox}>
      <Link href="/" className={styles.rootBtn}>
        <Image src={logo} alt="판다마켓 로고" className={styles.logo} />
      </Link>

      <div className={styles.content}>
        <label htmlFor="userEmail" className={styles.label}>
          이메일
        </label>
        <input
          id="userEmail"
          type="email"
          placeholder="이메일을 입력해주세요"
          autoComplete="off"
          className={styles.input}
        />

        <label htmlFor="userPassword" className={styles.label}>
          비밀번호
        </label>
        <div className={styles.wrapPassword}>
          <input
            id="userPassword"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            className={styles.passwordInput}
          />
          <Image src={hidePWIcon} alt="비밀번호 보기" className={styles.hideIcon} />
        </div>

        <button type="submit" className={styles.submitBtn}>
          로그인
        </button>

        <div className={styles.easyLogin}>
          <div className={styles.easyLoginContent}>
            <p className={styles.easyLoginText}>간편 로그인하기</p>
            <div className={styles.easyLoginIcons}>
              <a href="#">
                <Image src={socialIcon} alt="구글 로그인" className={styles.socialIconImg} />
              </a>
              <a href="#">
                <Image src={socialIcon} alt="카카오 로그인" className={styles.socialIconImg} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p>판다마켓이 처음이신가요?</p>
          <Link href="/signup" className={styles.bottomLink}>
            회원가입
          </Link>
        </div>
      </div>
    </form>
  );
}