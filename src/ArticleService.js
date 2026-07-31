//Article API 링크를 가져와서 CRUD 메소드를 함수로 작성해보기
const BASE_URL = "https://panda-market-api-crud.vercel.app";

//GET 메소드 이용 : getArticleList 만들기-> 게시글 전체 조회
// async function getArticleList({page = 1, pageSize = 10, orderBy = 'recent', keyword = ''}={}) {
//   const response = await fetch(`${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`,
//   {method: 'GET'});

//   if(!response.ok){
//       throw new Error(`HTTP 에러: ${response.statusText}`)
//   }

//   const result = await response.json();
//   console.log(result);
// }
// getArticleList();

//GET 메소드 이용 : getArticle 만들기-> 특정 게시글 조회
async function getArticle(articleId) {
  const response = await fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`HTTP 에러: ${response.statusText}`);
  }

  const result = await response.json();
  console.log(result);
}
getArticle(6700);

//POST 메소드 이용 : createArticle 만들기-> 게시글 생성하기
async function createArticle() {
  const response = await fetch(`${BASE_URL}/articles`, 
    {method: "POST",
      headers : {"Content-Type": "application/json"},
      body: JSON.stringify({
        image : "https://example.com/...",
        content: "게시글 내용입니다.: 상품 상태 양호합니다.",
        title: "상품 상태 양호"
      }),
    });

  if (!response.ok) {
    throw new Error(`HTTP 에러: ${response.statusText}`);
  }

  const result = await response.json();
  console.log(result);
}
createArticle();
