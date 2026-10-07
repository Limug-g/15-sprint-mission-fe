// 미션5의 useValidation 훅을 그대로 포팅 (로직 변경 없음)
export function useItemValidation({
  itemName,
  description,
  price,
  tags,
  tagInput,
}) {
  const errors = {};
  const pattern = /^[0-9]+$/;

  if (itemName.length <= 0 || itemName.length > 10) {
    errors.itemName = "상품명은 1자 이상 10자 이내로 작성해주세요";
  }

  if (description.length < 10 || description.length >= 100) {
    errors.description = "상품설명은 10자 이상 100자 이내로 작성해주세요";
  }

  if (!pattern.test(price)) {
    errors.price = "가격은 1자 이상, 숫자여야 합니다.";
  }

  const fiveLetterTag = tags.some((tag) => tag.length > 5);
  if (tagInput.length > 5 || fiveLetterTag) {
    errors.tags = "태그는 5글자 이내로 작성해주세요";
  }

  const isOkay =
    Object.keys(errors).length === 0 &&
    itemName &&
    description &&
    price &&
    tags.length > 0;

  return { errors, isOkay };
}
