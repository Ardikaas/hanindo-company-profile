import axios from "axios";
export const API_BASE = (
  process.env.REACT_APP_API_URL || "/hanindo-api"
).replace(/\/$/, "");
const TOKEN = "hanindo.admin.token";
export const session = {
  get: () => sessionStorage.getItem(TOKEN),
  set: (token) => sessionStorage.setItem(TOKEN, token),
  clear: () => sessionStorage.removeItem(TOKEN),
};
export const api = axios.create({ baseURL: API_BASE, timeout: 30000 });
export const adminApi = axios.create({ baseURL: API_BASE, timeout: 30000 });
adminApi.interceptors.request.use((config) => {
  if (session.get()) config.headers.Authorization = "Bearer " + session.get();
  return config;
});
adminApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      session.clear();
      window.dispatchEvent(new Event("hanindo:session-expired"));
    }
    return Promise.reject(error);
  },
);
export const errorMessage = (error) =>
  error.response?.data?.status?.message ||
  (error.code === "ERR_NETWORK"
    ? "Server tidak dapat dihubungi. Periksa koneksi lalu coba lagi."
    : "Permintaan gagal. Silakan coba lagi.");
const assets = require.context("../assets", false, /\.(png|jpe?g|webp)$/);
export function mediaUrl(value) {
  if (!value) return "";
  if (value.startsWith("asset:")) {
    try {
      return assets("./" + value.slice(6));
    } catch {
      return "";
    }
  }
  if (/^\/uploads\/[a-f\d-]+\.webp$/.test(value))
    return new URL(value, new URL(API_BASE, window.location.origin).origin)
      .href;
  return "";
}
export const versionHeader = (item) => ({
  headers: { "If-Match": String(item.__v ?? 0) },
});
