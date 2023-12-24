import {
  genresQuery,
  smallListOfGames,
  productQuery,
  productsQuery,
} from "../queries";

const Loader =
  (queryClient) =>
  async ({ params, request }) => {
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

    // productsQuery
    const productsParams = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const productsResponse = await queryClient.ensureQueryData(
      productsQuery(productsParams)
    );

    const products = productsResponse.data.results;
    const productsGenre = productsParams.genre;

    // returns
    return {
      genres,
      smallList,
      product,
      products,
      productsGenre,
      productsParams,
    };
  };

export default Loader;
