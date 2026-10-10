const API_URL = process.env.API_URL;

export default async function handler(req, res) {
  try {
    const { email, password } = req.body;

    if (req.method === "POST") {
      const response = await fetch(`${API_URL}/api/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      const setCookieHeader = response.headers.get("set-cookie");
      if (setCookieHeader) {
        res.setHeader("Set-Cookie", setCookieHeader);
      }

      return res.status(response.status).json(data);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "서버 오류가 발생했습니다." });
  }
}
