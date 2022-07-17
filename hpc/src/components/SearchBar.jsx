import React, { useState } from "react";
import { Pompy } from "./dummy_data";
import SearchFilter from "./SearchFilter";

function SearchBar() {
  const [search, setSearch] = useState("");

  const keys = ["producent", "power", "models", "pn"];

  const searcher = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(search))
    );
  };

  return (
    <div>
      <input
        placeholder="Wpisz producenta lub model pompy...."
        className="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchFilter data={searcher(Pompy)} />
    </div>
  );
}

export default SearchBar;
