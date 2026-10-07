import Image from "next/image";
import Link from "next/link";
import defaultImg from "@/assets/img_default.svg";
import heartImg from "@/assets/ic_heart.svg";
import * as styles from "./ItemCard.css.js";

// 미션5의 PostCard + PostBestCard를 하나로 합친 컴포넌트.
// variant="best" 이면 큰 카드(베스트 상품), 아니면 기본 목록 카드.
export default function ItemCard({ id, name, price, images, favoriteCount, variant }) {
  const isBest = variant === "best";
  const containerClass = isBest ? styles.bestContainer : styles.cardContainer;
  const size = isBest ? 282 : 221;

  return (
    <Link href={`/items/${id}`} className={containerClass}>
      <Image
        src={images || defaultImg}
        alt={name}
        width={size}
        height={isBest ? 282 : 221}
        className={styles.itemImg}
      />
      <div className={styles.detail}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>{price}원</p>
        <div className={styles.like}>
          <Image src={heartImg} alt="heartImg" width={16} height={16} />
          <p className={styles.likeNumber}>{favoriteCount ?? 0}</p>
        </div>
      </div>
    </Link>
  );
}