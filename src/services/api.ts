import axios from "axios";
import apiAnime from "./api.config";

const api = axios.create({
  baseURL: "https://kitsu.io/api/edge/",
});

export { api };
