import { customFetch } from "../utils";

const genresQuery = () => {
  return {
    queryKey: ["genres"],
    queryFn: () => customFetch(`/genres?key=${import.meta.env.VITE_RAWG_KEY}`),
  };
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(genresQuery());
  const genres = response.data.results;
  return { genres };
};

const GenresLoader = () => {
  return <div>GenresLoader</div>;
};
export default GenresLoader;
