import axios from "axios";
import apiBase from "./config";

const api = axios.create({
  baseURL: apiBase.apiKitsu,
});

export { api };
