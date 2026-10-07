import Image from "next/image";
import heartImg from "@/assets/ic_heart.svg";
import defaultImg from "@/assets/img_default.svg";
import * as styles from "./ItemDetail.css.js";

// 미션5의 DetailPage는 디자인 없이 빈 스텁("상품 상세 페이지 입니다")이었기 때문에,
// 백엔드가 내려주는 필드(name/price/description/tags/images/favoriteCount)를
// 기준으로 최소 기능 버전을 새로 구성했습니다.
// -> 피그마 상세페이지 디자인이 따로 있다면 className들만 그 값으로 맞추면 됩니다.
export default function ItemDetail({ item }) {
  return (
    <div className={styles.wrapper}>
      <Image
        src={item.images || defaultImg}
        alt={item.name}
        width={400}
        height={400}
        className={styles.imageBox}
      />
      <h1 className={styles.title}>{item.name}</h1>
      <p className={styles.price}>{item.price}원</p>
      <p className={styles.description}>{item.description}</p>

      {item.tags?.length > 0 && (
        <div className={styles.tagWrapper}>
          {item.tags.map((tag) => (
            <span key={tag} className={styles.tagChip}>
              {`#${tag}`}
            </span>
          ))}
        </div>
      )}

      <div className={styles.like}>
        <Image src={heartImg} alt="좋아요" width={20} height={20} />
        <span>{item.favoriteCount ?? 0}</span>
      </div>
    </div>
  );
}