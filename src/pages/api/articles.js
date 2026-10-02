// const API_URL = process.env.API_URL;

// export default async function fetchArticles(req, res) {
//   try {
//     if (!API_URL) {
//       return res.status(500).json({ error: "API_URL 환경변수가 설정되지 않았습니다." });
//     }
//     const response = await fetch(`${API_URL}/api/articles`);
//     if (!response.ok) {
//       return res.status(response.status).json({ error: "API 요청 실패" });
//     }
//     const data = await response.json();
//     console.log("data", data);
//     return res.status(200).json(data);
//   } catch (error) {
//     return res.status(500).json(error)
//   }
// }
const API_URL = process.env.API_URL;

export default async function handler(req, res) {
  try {
    if (!API_URL) {
      return res.status(500).json({ error: "API_URL 환경변수가 설정되지 않았습니다." });
    }

    if (req.method === "GET") {
      const response = await fetch(`${API_URL}/api/articles`);
      if (!response.ok) {
        return res.status(response.status).json({ error: "API 요청 실패" });
      }
      const data = await response.json();
      return res.status(200).json(data);
    }

    if (req.method === "POST") {
      const response = await fetch(`${API_URL}/api/articles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });

      const data = await response.json();
      return res.status(response.status).json(data);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "서버 오류가 발생했습니다." });
  }
}