import React from "react";

import "./FilterCheckbox.css";

function FilterCheckbox(props) {
  return (
    <label className="switch">
      <input
        className="switch__input"
        type="checkbox"
        onChange={props.onChange}
        checked={props.checked}
      ></input>
      <span className="switch__slider"></span>
    </label>
  );
}

export default FilterCheckbox;
