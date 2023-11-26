import { BsSearch } from "react-icons/bs";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router-dom";
import { nanoid } from "nanoid";

const genresQuery = () => {
  return {
    queryKey: ["genres"],
    queryFn: () =>
      customFetch(`/genres?key=${import.meta.env.REACT_APP_RAWG_KEY}`),
  };
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(genresQuery());
  const genres = response.data.results;
  return { genres };
};

const NavSearch = () => {
  const { genres } = useLoaderData();

  return (
    <form className="search-bar">
      <div>
        <select>
          {genres.map((genre) => {
            return (
              <option key={nanoid()} value={genre.name}>
                {genre.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <input type="text" placeholder="Enter your search key ..." />
      </div>
      <div>
        <button type="submit">
          <BsSearch />
        </button>
      </div>
    </form>
  );
};
export default NavSearch;
