"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import hidePWIcon from "@/assets/hidePW.svg";
import socialIcon from "@/assets/ic_social.svg";
import * as styles from "./LoginForm.css.js";
import { useState } from "react";
import { useRouter } from "next/navigation.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getEmailErr(email) {
  if (!email) return "";
  if (!EMAIL_REGEX.test(email)) {
    return "잘못된 이메일 형식입니다.";
  }
  return "";
}
function getPasswordErr(password) {
  if (!password) return "";
  if (password.length < 10) {
    return "비밀번호를 10자 이상 입력해주세요";
  }
  return "";
}

export default function LoginForm() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputpassword, setInputPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // const router = useRouter();

  const emailError = getEmailErr(inputEmail);
  const passwordError = getPasswordErr(inputpassword);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    setIsLoading(true);
    try {
      //api 호출
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: inputEmail,
          password: inputpassword,
        }),
        credentials: "include",
      });

      const data = await response.json();
      
      if (!response.ok) {
        setErrorMessage(data.message ?? "로그인에 실패했습니다.");
        setShowModal(true);
        return;
      }

      router.push("/items");
    } catch (error) {
      console.log(error);
      setErrorMessage("네트워크 오류가 발생했습니다.");
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <form className={styles.formBox} onSubmit={handleSubmit} noValidate>
        <Link href="/" className={styles.rootBtn}>
          <Image src={logo} alt="판다마켓 로고" className={styles.logo} />
        </Link>

        <div className={styles.content}>
          <div className={styles.inputWrap}>
            <label htmlFor="userEmail" className={styles.label}>
              이메일
            </label>
            <input
              id="userEmail"
              type="email"
              value={inputEmail}
              onChange={(event) => setInputEmail(event.target.value)}
              placeholder="이메일을 입력해주세요"
              autoComplete="off"
              className={`${emailError ? styles.errorInput : styles.input}`}
            />
            {emailError && <div className={styles.errorText}>{emailError}</div>}
          </div>

          <div className={styles.inputWrap}>
            <label htmlFor="userPassword" className={styles.label}>
              비밀번호
            </label>
            <div className={styles.wrapPassword}>
              <input
                id="userPassword"
                type="password"
                value={inputpassword}
                onChange={(event) => setInputPassword(event.target.value)}
                placeholder="비밀번호를 입력해주세요"
                className={`${passwordError ? styles.errorInput : styles.input}`}
              />
              <Image
                src={hidePWIcon}
                alt="비밀번호 보기"
                className={styles.hideIcon}
              />
            </div>
            {passwordError && (
              <div className={styles.errorText}>{passwordError}</div>
            )}
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={!inputEmail.trim() || !inputpassword.trim()}
          >
            {isLoading ? "로그인 중 ..." : "로그인"}
          </button>

          <div className={styles.easyLogin}>
            <div className={styles.easyLoginContent}>
              <p className={styles.easyLoginText}>간편 로그인하기</p>
              <div className={styles.easyLoginIcons}>
                <a href="#">
                  <Image
                    src={socialIcon}
                    alt="구글 로그인"
                    className={styles.socialIconImg}
                  />
                </a>
                <a href="#">
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
            <p>판다마켓이 처음이신가요?</p>
            <Link href="/signup" className={styles.bottomLink}>
              회원가입
            </Link>
          </div>
        </div>
      </form>
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalBox}>
            <div className={styles.modalMessage}>{errorMessage}</div>
            <button 
            onClick={() => setShowModal(false)}
            className={styles.checkBtn}>확인</button>
          </div>
        </div>
      )}
    </>
  );
}
