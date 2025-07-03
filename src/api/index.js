import axios from "axios";
const PER_PAGE = 28;

(axios.defaults.headers.common["Authorization"] =
  `Client-ID ${import.meta.env.VITE_API_KEY}`),
  (axios.defaults.baseURL = "https://api.unsplash.com");

export const get = async (query, page=1) => {
  const res = await axios.get(
    `/search/photos/?query=${query}&page=${page}&per_page=${PER_PAGE}`
  );

  return res;
};
