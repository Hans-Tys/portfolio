const SearchBar = () => (
  <form className="search-container" action="/pokedex" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Search blog posts</span>
    </label>
    <input
      className="searchbar"
      type="text"
      id="header-search"
      placeholder="Search pokemon"
      name="name"
    />
    <button className="btn-search" type="submit">Search</button>
  </form>
);

export default SearchBar;
