import { BsSearch } from "react-icons/bs";
import { Form, useLoaderData } from "react-router-dom";
import { nanoid } from "nanoid";
import React from "react";

const NavSearch = ({ setOpen }) => {
  const { genres } = useLoaderData();

  return (
    <Form className="search-bar" action="/products">
      <div>
        <label htmlFor="genre">Pick a genre</label>
        <select id="genre" name="genre">
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
        <label htmlFor="search_key">Search key</label>
        <input
          id="search_key"
          type="text"
          placeholder="Enter your search key ..."
          name="search_key"
        />
      </div>
      <div>
        <label htmlFor="submit">Submit</label>
        <button
          id="submit"
          type="submit"
          onClick={() => {
            if (setOpen !== undefined) setOpen(false);
          }}
        >
          <BsSearch />
        </button>
      </div>
    </Form>
  );
};
export default React.memo(NavSearch);
