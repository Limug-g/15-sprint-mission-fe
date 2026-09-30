const API_URL = process.env.API_URL;

export default async function fetchArticles(req, res) {
  try {
    if (!API_URL) {
      return res.status(500).json({ error: "API_URL 환경변수가 설정되지 않았습니다." });
    }
    const response = await fetch(`${API_URL}/api/articles`);
    if (!response.ok) {
      return res.status(response.status).json({ error: "API 요청 실패" });
    }
    const data = await response.json();
    console.log("data", data);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error)
  }
}
