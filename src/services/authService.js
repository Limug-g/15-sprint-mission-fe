import { apiFetch } from "@/lib/apiFetch";

export const signin = (loginData) =>
  apiFetch("/api/auth/signin", { method: "POST", body: loginData });

export const signup = (signupData) =>
  apiFetch("/api/auth/signup", { method: "POST", body: signupData });

export async function getMe() {
  try {
    return await apiFetch("/api/users/me");
  } catch (error) {
    if (error.status === 401) return null;
    throw error;
  }
}

export const logout = () => apiFetch("/api/auth/logout", { method: "POST" });
