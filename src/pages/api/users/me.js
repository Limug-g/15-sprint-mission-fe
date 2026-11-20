const API_URL = process.env.API_URL;

export default async function handler(req, res) {
  try {
    const response = await fetch(`${API_URL}/api/users/me`, {
      headers: { cookie: req.headers.cookie ?? "" },
    });
    const data = await response.json();

    return res.status(response.status).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "서버 오류가 발생했습니다." });
  }
}
