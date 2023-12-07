import axios from "axios";

export async function init() {

  // TODO - Server URL goes here
  axios.defaults.baseURL = "http://localhost:1776/api/";
}