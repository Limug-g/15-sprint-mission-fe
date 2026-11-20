const API_URL = process.env.API_URL;

export default async function handler(req, res) {
  const response = await fetch(`${API_URL}/api/auth/logout`, {
    method: "POST",
    headers: { cookie: req.headers.cookie ?? "" },
  });
  // 여기까지: 브라우저 -> Next-api로 갈때 쿠키를 꺼내서 BE로 보내줌
  // BE와 통신하는 Next-api는 쿠키를 자동으로 받지 못하므로 req에서 꺼내는 코드를 작성해야됨

  const setCookie = response.headers.getSetCookie();
  // 여기까지: BE-> Next-api로 올떄 서버 응답을 꺼내는 코드
  // 쿠키 만료 정보를 담아둔다. (이거시 로그아웃)

  if (setCookie.length) {
    res.setHeader("Set-Cookie", setCookie);
  }
  //여기까지: Next-api-> 브라우저 갈때
  //브라우저 응답 헤더에 쿠키가 만료되었음을 담아준다

  return res.status(response.status).end();
}
