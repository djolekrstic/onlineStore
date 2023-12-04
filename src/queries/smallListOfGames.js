import { customFetch } from "../utils";

const smallListOfGamesQuery = () => {
  return {
    queryKey: ["smallList"],
    queryFn: () =>
      customFetch(
        `/games?key=${import.meta.env.VITE_RAWG_KEY}&page=1&page_size=10`
      ),
  };
};

export default smallListOfGamesQuery;
