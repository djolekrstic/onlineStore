import { BsSearch } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import { nanoid } from "nanoid";

const NavSearch = () => {
  const { genres } = useLoaderData();

  return (
    <form className="search-bar">
      <div>
        <select>
          {genres.map((genre) => {
            return (
              <option key={nanoid()} value={genre.name}>
                {genre.name == "Massively Multiplayer"
                  ? "Multiplayer"
                  : genre.name}
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
