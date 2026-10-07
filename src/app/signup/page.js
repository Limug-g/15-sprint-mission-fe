import { SignupForm } from "@/components/SignupForm";
import * as styles from "@/components/LoginForm/LoginForm.css.js";

export const metadata = {
  title: "회원가입 | Panda-Market",
};

export default function SignupPage() {
  return (
    <div className={styles.page}>
      <SignupForm />
    </div>
  );
}