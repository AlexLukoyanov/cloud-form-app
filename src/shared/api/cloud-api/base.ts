import axios from "axios";

const API_URL = "https://api.sbercloud.ru";

export const apiInstant = axios.create({
  baseURL: API_URL,
});
