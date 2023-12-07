import axios from "axios";
import dotenv from "dotenv";

export async function init() {
  dotenv.config();
  axios.defaults.baseURL = process.env.SERVER_URL || "http://localhost:1776";
  console.log("Initialized axios", axios.defaults.baseURL);
}