import axios from "axios";
import dotenv from 'dotenv';

// load the contents from .env into process.env
dotenv.config();

export async function init() {

  const mongodbUri = process.env.MONGO_CONNECTION_URI;
  axios.defaults.baseURL = "";
}