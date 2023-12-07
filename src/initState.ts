import axios from "axios";

export async function init() {
<<<<<<< HEAD

  // TODO - Server URL goes here
  axios.defaults.baseURL = "http://localhost:1776/api/";
=======
  axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL || "http://localhost:1776/api/";
>>>>>>> origin/dev
}