import { LoginForm } from "@/components/LoginForm";
import * as styles from "@/components/LoginForm/LoginForm.css.js";

export const metadata = {
  title: "로그인 | Panda-Market",
};

// 로그인 페이지는 GlobalLayout(nav/footer) 없이 단독 페이지로 둡니다
// (원본 login.html도 네비게이션 없이 혼자 떠 있는 화면이었습니다).
export default function LoginPage() {
  return (
    <div className={styles.page}>
      <LoginForm />
    </div>
  );
}