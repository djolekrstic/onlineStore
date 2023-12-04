import { genresQuery, smallListOfGames } from "../queries";

const Loader = (queryClient) => async () => {
  // genresQuery
  const genresResponse = await queryClient.ensureQueryData(genresQuery());
  const genres = genresResponse.data.results;

  // smallListOfGames
  const smallListResponse = await queryClient.ensureQueryData(
    smallListOfGames()
  );
  const smallList = smallListResponse.data.results;

  // returns
  return { genres, smallList };
};

export default Loader;
