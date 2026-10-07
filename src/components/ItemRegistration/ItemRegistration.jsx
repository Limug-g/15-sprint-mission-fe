"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import iconX from "@/assets/ic_X.svg";
import { useItemValidation } from "@/hook/useItemValidation";
import * as styles from "./ItemRegistration.css.js";

// 미션5의 Registration.jsx 포팅.
// 가장 큰 차이: createPosts(직접 외부 API 호출) -> fetch("/api/items") (BFF 경유)
export default function ItemRegistration() {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();
  const { errors, isOkay } = useItemValidation({
    itemName,
    description,
    price,
    tags,
    tagInput,
  });

  const handleTagKeydown = (event) => {
    if (event.nativeEvent.isComposing) return;

    if (event.key === "Enter") {
      const trimTag = tagInput.trim();
      if (trimTag === "" || trimTag.length > 5) return;
      if (tags.includes(trimTag)) {
        setTagInput("");
        return;
      }
      setTags((prev) => [...prev, trimTag]);
      setTagInput("");
    }
  };

  const handleDeleteTag = (removeTag) => {
    setTags((prev) => prev.filter((tag) => tag !== removeTag));
  };

  const handleRegister = async () => {
    setSubmitting(true);
    try {
      const response = await fetch("/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: itemName,
          description,
          price: Number(price),
          tags,
        }),
      });

      if (!response.ok) {
        throw new Error("상품 등록에 실패했습니다.");
      }

      const result = await response.json();
      // articles 쪽(ArticlePosting.jsx)처럼 응답이 { data: {...} } 형태라고 가정.
      // 실제 응답이 바로 객체([id, name, ...])라면 result.id 로 바꿔주세요.
      const newItemId = result.data?.id ?? result.id;
      router.push(`/items/${newItemId}`);
    } catch (error) {
      alert(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.headTitle}>상품 등록하기</h2>
          <button
            type="button"
            className={styles.registerBtn}
            onClick={handleRegister}
            disabled={!isOkay || submitting}
          >
            등록
          </button>
        </div>

        <label htmlFor="itemName" className={styles.label}>
          상품명
        </label>
        <input
          id="itemName"
          type="text"
          placeholder="상품명을 입력해주세요"
          className={`${styles.nameInput} ${errors.itemName ? styles.fieldError : ""}`}
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
        />
        {errors.itemName && <p className={styles.errorMessage}>{errors.itemName}</p>}

        <label htmlFor="description" className={styles.label}>
          상품 소개
        </label>
        <textarea
          id="description"
          placeholder="상품 소개를 입력해주세요"
          maxLength={100}
          className={`${styles.descriptionInput} ${errors.description ? styles.fieldError : ""}`}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        {errors.description && <p className={styles.errorMessage}>{errors.description}</p>}

        <label htmlFor="price" className={styles.label}>
          판매가격
        </label>
        <input
          id="price"
          type="text"
          placeholder="판매 가격을 입력해주세요"
          className={`${styles.priceInput} ${errors.price ? styles.fieldError : ""}`}
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        {errors.price && <p className={styles.errorMessage}>{errors.price}</p>}

        <label htmlFor="tag" className={styles.label}>
          태그
        </label>
        <div className={styles.tagChipWrapper}>
          <input
            id="tag"
            type="text"
            placeholder="태그를 입력해주세요"
            className={`${styles.tagInput} ${errors.tags ? styles.fieldError : ""}`}
            value={tagInput}
            onChange={(event) => setTagInput(event.target.value)}
            onKeyDown={handleTagKeydown}
          />
          {errors.tags && <p className={styles.errorMessage}>{errors.tags}</p>}
          {tags.map((tag) => (
            <span key={tag} className={styles.tagChip}>
              {`#${tag}`}
              <Image
                src={iconX}
                alt="삭제"
                width={20}
                height={20}
                onClick={() => handleDeleteTag(tag)}
                style={{ cursor: "pointer" }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}