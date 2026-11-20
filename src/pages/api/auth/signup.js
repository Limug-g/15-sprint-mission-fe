const API_URL = process.env.API_URL;

export default async function handler(req, res) {
  if(req.method !== "POST"){
    return res.status(405).end();
  }
  
  try {
    const { email, password, name } = req.body;
    const response = await fetch(`${API_URL}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    });

    const data = await response.json();

    const setCookieHeader = response.headers.getSetCookie(); // 빠져 있던 선언
    if (setCookieHeader.length) {
      res.setHeader("Set-Cookie", setCookieHeader);
    }
    return res.status(response.status).json(data);
  } catch (error) {
    console.error(error)
    return res.status(500).json({error: "서버 오류가 발생했습니다."})
  }
}
