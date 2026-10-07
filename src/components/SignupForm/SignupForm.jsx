import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import hidePWIcon from "@/assets/hidePW.svg";
import socialIcon from "@/assets/ic_social.svg";
import * as styles from "./SignupForm.css.js";

// signup.html 포팅. 회원가입 제출/비밀번호 보이기토글/입력값 검증(이메일 형식,
// 비밀번호 일치 확인 등) 로직은 아직 구현하지 않았습니다 — 나중에 "use client"로
// 바꾸고 useState/onSubmit을 추가하면 됩니다.
export default function SignupForm() {
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

        <label htmlFor="userNickname" className={styles.label}>
          닉네임
        </label>
        <input
          id="userNickname"
          type="text"
          placeholder="닉네임을 입력해주세요"
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
          <Image
            src={hidePWIcon}
            alt="비밀번호 보기"
            className={styles.hideIcon}
          />
        </div>

        <label htmlFor="userPasswordConfirm" className={styles.label}>
          비밀번호 확인
        </label>
        <div className={styles.wrapPassword}>
          <input
            id="userPasswordConfirm"
            type="password"
            placeholder="비밀번호를 다시 한 번 입력해주세요"
            className={styles.passwordInput}
          />
          {/* 원본 HTML에 이 아이콘 경로가 ".images/hidePW.svg"로 오타(슬래시 누락)
              나 있었는데, import로 바꾸면서 자연스럽게 고쳐졌습니다. */}
          <Image
            src={hidePWIcon}
            alt="비밀번호 보기"
            className={styles.hideIcon}
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          회원가입
        </button>

        <div className={styles.easyLogin}>
          <div className={styles.easyLoginContent}>
            <p className={styles.easyLoginText}>간편 로그인하기</p>
            <div className={styles.easyLoginIcons}>
              <a
                href="<https://www.google.com/>"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={socialIcon}
                  alt="구글 로그인"
                  className={styles.socialIconImg}
                />
              </a>
              <a
                href="<https://www.kakaocorp.com/page/>"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={socialIcon}
                  alt="카카오 로그인"
                  className={styles.socialIconImg}
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p>이미 회원이신가요?</p>
          <Link href="/login" className={styles.bottomLink}>
            로그인
          </Link>
        </div>
      </div>
    </form>
  );
}
