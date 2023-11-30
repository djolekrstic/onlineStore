import { customFetch } from "../utils";

const genresQuery = () => {
  return {
    queryKey: ["genres"],
    queryFn: () => customFetch(`/genres?key=${import.meta.env.VITE_RAWG_KEY}`),
  };
};

export default genresQuery;
