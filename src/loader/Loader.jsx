import { genresQuery, smallListOfGames, productQuery } from "../queries";

const Loader =
  (queryClient) =>
  async ({ params }) => {
    // genresQuery
    const genresResponse = await queryClient.ensureQueryData(genresQuery());
    const genres = genresResponse.data.results;

    // smallListOfGames
    const smallListResponse = await queryClient.ensureQueryData(
      smallListOfGames()
    );
    const smallList = smallListResponse.data.results;

    // productQuery
    const productResponse = await queryClient.ensureQueryData(
      productQuery(params.id)
    );
    const product = productResponse.data;

    // returns
    return { genres, smallList, product };
  };

export default Loader;
