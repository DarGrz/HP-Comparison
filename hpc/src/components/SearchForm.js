import react, { useState } from "react";
import classes from "./SearchForm.module.css";
import Button from "./Button";

const SearchForm = () => {
  const [searchProducent, setSearchProducent] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const [searchPower, setSearchPower] = useState("");
  const [searchType, setSearchType] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    console.log(searchProducent, searchModel, searchPower, searchType);
    setSearchProducent("");
    setSearchModel("");
    setSearchPower("");
  };

  const producentSearchHandler = (event) => {
    setSearchProducent(event.target.value);
  };
  const modelSearchHandler = (e) => {
    setSearchModel(e.target.value);
  };
  const powerSearchHandler = (e) => {
    setSearchPower(e.target.value);
  };
  const typeSearchHandler = (e) => {
    setSearchType(e.target.value);
  };

  return (
    <div className={classes.searchform}>
      <form onSubmit={searchHandler} id="searchform">
        <label htmlFor="producent">Producent</label>
        <input
          value={searchProducent}
          type="text"
          id="producent"
          onChange={producentSearchHandler}
        ></input>

        <label htmlFor="model">Model</label>
        <input
          value={searchModel}
          type="text"
          id="model"
          onChange={modelSearchHandler}
        ></input>

        <label htmlFor="power">Moc (kW)</label>
        <input
          value={searchPower}
          type="text"
          id="power"
          onChange={powerSearchHandler}
        ></input>

        <label htmlFor="type">Typ</label>
        <select id="type" form="searchform" onChange={typeSearchHandler}>
          <option value="Split">Split</option>
          <option value="Monoblok">Monoblok</option>
        </select>
        <Button type="submit">Wyszukaj</Button>
      </form>
    </div>
  );
};

export default SearchForm;
