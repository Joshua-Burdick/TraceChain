import axios from "axios";

export async function init() {

  // TODO - Server URL goes here
  axios.defaults.baseURL = "https://trace-chain-server.vercel.app/api";
}