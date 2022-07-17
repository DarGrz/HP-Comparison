import React, { useState } from "react";
import classes from "./SearchFilter.module.css";

function SearchFilter({ data }) {
  return (
    <div className={classes.control}>
      {data.slice(-10).map((item) => (
        <div key={item.pn}>
          <span className="info_card">
            {item.thumb} {item.producent} {item.models} {item.power} kW -{" "}
            {item.pn}
          </span>
        </div>
      ))}
    </div>
  );
}

export default SearchFilter;
