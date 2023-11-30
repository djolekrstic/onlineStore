import { genresQuery } from "../queries";

const Loader = (queryClient) => async () => {
  // genresQuery
  const genresResponse = await queryClient.ensureQueryData(genresQuery());
  const genres = genresResponse.data.results;

  // returns
  return { genres };
};

export default Loader;
