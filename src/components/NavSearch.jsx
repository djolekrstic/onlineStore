import { BsSearch } from "react-icons/bs";
import { Form, useLoaderData } from "react-router-dom";
import { nanoid } from "nanoid";

const NavSearch = () => {
  const { genres } = useLoaderData();

  return (
    <Form className="search-bar" action="/products">
      <div>
        <select name="genre">
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
        <input
          type="text"
          placeholder="Enter your search key ..."
          name="search_key"
        />
      </div>
      <div>
        <button type="submit">
          <BsSearch />
        </button>
      </div>
    </Form>
  );
};
export default NavSearch;
