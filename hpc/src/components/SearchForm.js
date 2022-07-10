import react from "react";
import classes from "./SearchForm.module.css";
import Button from "./Button";

const SearchForm = () => {
  return (
    <div className={classes.searchform}>
      <form id="searchform">
        <label htmlFor="producent">Producent</label>
        <input type="text" id="producent"></input>
        <label htmlFor="model">Model</label>
        <input type="text" id="model"></input>
        <label htmlFor="power">Moc w kW</label>
        <input type="text" id="power"></input>
        <label htmlFor="type">Typ</label>
        <select id="type" form="searchform">
          <option value="Split">Split</option>
          <option value="Monoblok">Monoblok</option>
        </select>
      </form>
      <Button type="submit">Wyszukaj</Button>
    </div>
  );
};

export default SearchForm;
