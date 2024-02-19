import axios from "axios";

export async function init() {
  axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL || "https://localhost:1776/api/";
}
