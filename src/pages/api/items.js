const API_URL = process.env.API_URL;

export default async function handler(req, res) {
  try {
    if (!API_URL) {
      return res
        .status(500)
        .json({ error: "API_URL 환경변수가 설정되지 않았습니다." });
    }

    if (req.method === "GET") {
      const { page, pageSize, orderBy, keyword } = req.query;
      const params = new URLSearchParams({
        page: page ?? 1,
        limits: pageSize ?? 10,
        orderBy: orderBy ?? "recent",
        keyword: keyword ?? "",
      });

      // 실제 백엔드 엔드포인트 경로는 "/api/items" 라고 가정했습니다.
      // (panda-market-Server의 Item 모델 이름을 그대로 따른 추정이며,
      //  실제 라우터 파일에서 다르게 정의되어 있다면 이 한 줄만 바꾸면 됩니다.)
      const response = await fetch(`${API_URL}/api/items?${params.toString()}`);
      if (!response.ok) {
        return res.status(response.status).json({ error: "API 요청 실패" });
      }
      const data = await response.json();
      return res.status(200).json(data);
    }

    if (req.method === "POST") {
      const response = await fetch(`${API_URL}/api/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      });

      const data = await response.json();
      return res.status(response.status).json(data);
    }

    if (req.method === "PATCH") {
      const { itemId, ...updateData } = req.body;
      if (!itemId) {
        return res.status(400).json({ error: "itemId가 필요합니다." });
      }

      const response = await fetch(`${API_URL}/api/items/${itemId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData),
      });

      const data = await response.json();
      return res.status(response.status).json(data);
    }

    if (req.method === "DELETE") {
      const { itemId } = req.body;
      if (!itemId) {
        return res.status(400).json({ error: "itemId가 필요합니다." });
      }

      const response = await fetch(`${API_URL}/api/items/${itemId}`, {
        method: "DELETE",
      });

      if (response.status === 204) {
        return res.status(204).end();
      }
      const data = await response.json();
      return res.status(response.status).json(data);
    }

    return res.status(405).json({ error: "지원하지 않는 메서드입니다." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "서버 오류가 발생했습니다." });
  }
}