import { customFetch } from "../utils";

const productsQuery = (params) => {
  const { genre, search_key, page_size } = params;
  const genreLC = genre?.toLowerCase();

  return {
    queryKey: ["products", genreLC ?? "", search_key ?? "", page_size ?? ""],
    queryFn: () =>
      customFetch(
        `/games?genres=${genreLC}&search=${search_key}&page_size=${page_size}&key=${
          import.meta.env.VITE_RAWG_KEY
        }`
      ),
  };
};

export default productsQuery;
