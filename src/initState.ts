import axios from "axios";
import dotenv from 'dotenv';

// load the contents from .env into process.env
dotenv.config();

export async function init() {

  // TODO - Server URL goes here
  axios.defaults.baseURL = "https://trace-chain-server.vercel.app/api";
}