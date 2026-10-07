import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/pandamarketlogo.png";
import * as styles from "./NavLanding.css.js";

export default function NavLanding() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/">
          <Image className={styles.logoImg} src={logo} alt="#logo" />
        </Link>
      </div>
      <div className={styles.login}>로그인</div>
    </nav>
  );
}