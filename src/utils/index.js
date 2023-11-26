import axios from "axios";

const productionUrl = "https://api.rawg.io/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});
