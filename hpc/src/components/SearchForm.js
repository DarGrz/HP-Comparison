import react from "react";
import classes from "./SearchForm.module.css";

const SearchForm = () => {
  return (
    <div className={classes.searchform}>
      <form id="searchform">
        <label htmlFor="producent">Producent</label>
        <input type="text" id="producent"></input>
        <label htmlFor="model">Model</label>
        <input type="text" id="model"></input>
        <label htmlFor="power">Moc pompy w kW</label>
        <input type="text" id="power"></input>
      </form>
      <label htmlFor="type">Typ</label>
      <select id="type" form="searchform">
        <option value="volvo">Split</option>
        <option value="saab">Monoblok</option>
      </select>
    </div>
  );
};

export default SearchForm;
