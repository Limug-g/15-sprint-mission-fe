"use client";

import Link from "next/link";
import * as styles from "./UserMenu.css.js";
import { useLogout, useMe } from "@/hook/useAuth.js";
import { useRouter } from "next/navigation.js";
import { useState } from "react";
import Image from "next/image.js";
import defaultProfile from "@/assets/ic_profile.svg";

export default function UserMenu() {
  const { data: user, isPending } = useMe(); //-> getMe 유저 정보 불러오는 API
  const { mutate: logoutMutate, isPending: isLoggingOut } = useLogout();
  //-> 로그아웃 처리하는 API
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    logoutMutate(undefined, {
      onSuccess: () => {
        (setIsOpen(false), () => router.push("/"));
      },
    });
  };

  if (isPending) {
    return <div className={styles.authPlaceholder} />;
  }

  if (user) {
    return (
      <div className={styles.userMenuWrap}>
        <button type="button" className={styles.profileBtn} onClick={() => setIsOpen((prev) => !prev)}>
          <Image className={styles.profileImg} src={defaultProfile} alt="프로필" />
        </button>
        <div></div>
        {isOpen && (
          <ul className={styles.menu}>
            <li>
              <button
                type="button"
                className={styles.menuItem}
                onClick={handleLogout}
                disabled={isLoggingOut}
              >
                로그아웃
              </button>
            </li>
          </ul>
        )}
      </div>
    );
  }
  return (
    <Link href="/login" className={styles.login}>
      로그인
    </Link>
  );
}
