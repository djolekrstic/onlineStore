import { BsSearch } from "react-icons/bs";

const NavSearch = () => {
  return (
    <form className="search-bar">
      <div>
        <select>
          <option>Categories</option>
          <option>Prva opcija</option>
          <option>Druga opcija</option>
          <option>Treca opcija</option>
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
