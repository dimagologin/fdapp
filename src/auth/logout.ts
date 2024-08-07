import { googleLogout } from "@react-oauth/google";
import { clearUser } from "./user";

export async function logout() {
  delete localStorage.auth;
  clearUser()
  await googleLogout();
}