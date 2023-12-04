import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export async function init() {
  axios.defaults.baseURL = process.env.SERVER_URL || "http://localhost:1776";
}