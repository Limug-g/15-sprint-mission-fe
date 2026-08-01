//ProductService API 링크를 가져와서 CRUD 메소드를 함수로 작성해보기
const BASE_URL = "https://panda-market-api-crud.vercel.app/products";

//GET 메소드 이용 : getArticleList 만들기-> 게시글 전체 조회
// async function getProductList({
//   page = 1,
//   pageSize = 10,
//   orderBy = "recent",
//   keyword = "",
// } = {}) {
//   try {
//     const response = await fetch(
//       `${BASE_URL}?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`,
//       { method: "GET" },
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP 에러: ${response.statusText}`);
//     }

//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.log("상품을 조회하지 못했습니다.: ", error.message);
//   }
// }
// getProductList();

//GET 메소드 이용 : getArticle 만들기-> 특정 게시글 조회
async function getProduct(productId) {
  try {
    const response = await fetch(`${BASE_URL}/${productId}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP 에러: ${response.statusText}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log("상품을 찾을 수 없습니다.: ", error.message);
  }
}
getProduct(4106);

// //POST 메소드 이용 : createArticle 만들기-> 게시글 생성하기
// async function createArticle() {
//   try {
//     const response = await fetch(`${BASE_URL}/articles`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         image: "https://example.com/...",
//         content: "게시글 내용입니다.: 상품 상태 양호합니다.",
//         title: "상품 상태 양호",
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP 에러: ${response.statusText}`);
//     }

//     const result = await response.json();
//     console.log(`응답 성공! ${response.status}: ${response.statusText}`);
//     console.log(result);
//   } catch (error) {
//     console.log("게시글을 생성할 수 없습니다.: ", error.message);
//   }
// }
// createArticle();

//PATCH 메소드로 patchArticle()만들기-> 게시글 수정
// async function patchArticle(articleId) {
//   try {
//     const response = await fetch(`${BASE_URL}/articles/${articleId}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         image: "https://example2.com/...",
//         content: "어렵다잉",
//         title: "마 할 수 있나.",
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP 에러: ${response.statusText}`);
//     }

//     const result = await response.json();
//     console.log(`응답 성공! ${response.status}: ${response.statusText}`);
//     console.log(result);
//   } catch (error) {
//     console.log("게시글을 수정할 수 없습니다.: ", error.message);
//   }
// }
// patchArticle(6740);

// DELETE 메소드로 게시글 지우기
// async function deleteArticle(articleId) {
//   try {
//     const response = await fetch(`${BASE_URL}/articles/${articleId}`, {
//       method: "DELETE",
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP 에러: ${response.statusText}`);
//     }

//     const result = await response.json();
//     console.log("삭제된 게시글 id: ", result);
//   } catch (error) {
//     console.log("삭제 실패:", error.message);
//   }
// }
// deleteArticle(6759);
// getArticleList();
