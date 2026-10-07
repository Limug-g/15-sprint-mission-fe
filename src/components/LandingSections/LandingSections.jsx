import Link from "next/link";
import Image from "next/image";
import section01Img from "@/assets/section01IMG.png";
import section02Img from "@/assets/section02IMG.png";
import section03Img from "@/assets/section03IMG.png";
import section04Img from "@/assets/section04IMG.png";
import section05Img from "@/assets/section05IMG.png";
import * as styles from "./LandingSections.css.js";

export default function LandingSections() {
  return (
    <>
      <section className={styles.section01}>
        <div className={styles.wrapSection01}>
          <div className={styles.goitem}>
            <div className={styles.content01}>
              <p>일상의 모든 물건을</p>
              <p>거래해 보세요</p>
            </div>
            <Link href="/items" className={styles.goButtonInner}>
              구경하러 가기
            </Link>
          </div>
          <Image src={section01Img} alt="section01" className={styles.sectionImg} width={746} height={340} />
        </div>
      </section>

      <section className={styles.section02}>
        <div className={styles.wrapSection02}>
          <Image src={section02Img} alt="section02" className={styles.sectionImg} width={588} height={444} />
          <div className={styles.goitem02}>
            <div className={styles.badge}>Hot item</div>
            <div className={styles.contentBig}>
              <p>인기 상품을</p>
              <p>확인해 보세요</p>
            </div>
            <p className={styles.contentSmall}>가장 HOT한 중고거래 물품을 판다마켓에서 확인해 보세요</p>
          </div>
        </div>
      </section>

      <section className={styles.section03}>
        <div className={styles.wrapSection03}>
          <Image src={section03Img} alt="section03" className={styles.sectionImg} width={588} height={444} />
          <div className={styles.goitem03}>
            <div className={styles.badge}>Search</div>
            <div className={styles.contentBig} style={{ textAlign: "right" }}>
              <p>구매를 원하는</p>
              <p>상품을 검색하세요</p>
            </div>
            <p className={styles.contentSmall}>구매하고 싶은 물품은 검색해서</p>
            <p className={styles.contentSmall}>쉽게 찾아보세요</p>
          </div>
        </div>
      </section>

      <section className={styles.section04}>
        <div className={styles.wrapSection04}>
          <Image src={section04Img} alt="section04" className={styles.sectionImg} width={588} height={444} />
          <div className={styles.goitem04}>
            <div className={styles.badge}>Register</div>
            <div className={styles.contentBig}>
              <p>판매를 원하는</p>
              <p>상품을 등록하세요</p>
            </div>
            <p className={styles.contentSmall}>어떤 물건이든 판매하고 싶은 상품을</p>
            <p className={styles.contentSmall}>쉽게 등록하세요</p>
          </div>
        </div>
      </section>

      <section className={styles.section05}>
        <div className={styles.wrapSection05}>
          <div className={styles.goitem05}>
            <div className={styles.content01}>
              <p>믿을 수 있는</p>
              <p>판다마켓 중고 거래</p>
            </div>
          </div>
          <Image src={section05Img} alt="section05" className={styles.sectionImg} width={746} height={397} />
        </div>
      </section>
    </>
  );
}