export async function apiFetch(path, { body, headers, ...options } = {}) {
  const res = await fetch(path, {
    ...options,
    headers: {
      ...(body !== undefined && { "Content-Type": "application/json" }),
      ...headers,
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
    credentials: "include",
  });

  //logout일 떄 (응답이 204나 본문이 없는 경우)
  const text = await res.text();
  const data = text ? JSON.parse(text) : null;

  if(!res.ok){
    const message = 
    typeof data?.error === "string"
    ? data.error
    : data?.error?.message ?? data?.message ?? `요청 실패 (${res.status})`;
    const error = new Error(message);
    error.status = res.status;
    error.fieldErrors = data?.error?.fieldErrors ?? {};
    throw error;
  }
  return data
}
