import { customFetch } from "../utils";

const productQuery = (id) => {
  return {
    queryKey: ["product", id],
    queryFn: () =>
      customFetch(`/games/${id}?key=${import.meta.env.VITE_RAWG_KEY}`),
  };
};

export default productQuery;
