import { customFetch } from "../utils";

const productsQuery = (params) => {
  const { genre, search_key, page_size, page } = params;
  const genreLC = genre?.toLowerCase() || "";
  const searchKey = search_key || "";
  const pageParam = page || 1;

  return {
    queryKey: [
      "products",
      genreLC ?? "",
      search_key ?? "",
      page_size ?? "",
      page ?? 1,
    ],
    queryFn: () =>
      customFetch(
        `/games?genres=${genreLC}&search=${searchKey}&page_size=${page_size}&page=${pageParam}&key=${
          import.meta.env.VITE_RAWG_KEY
        }`
      ),
  };
};

export default productsQuery;
