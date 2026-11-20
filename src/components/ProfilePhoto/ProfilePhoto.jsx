import Image from "next/image";
import * as styles from "./ProfilePhoto.css";

const DEFAULT_PROFILE = "@/assets/ic_profile.svg";

export default function ProfilePhoto({ photo, name }) {
  const src = photo || DEFAULT_PROFILE;
  const alt = name || "프로필";

  return (
    <Image
      className={styles.profilePhoto}
      src={src}
      alt={alt}
      width={30}
      height={30}
      loading="eager"
    />
  );
}
