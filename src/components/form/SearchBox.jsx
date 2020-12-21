import { rest } from "lodash";
import React from "react";
const SearchBox = ({ label, value, onChange }) => {
  return (
    <div className="form-group">
      <label className="d-flex" htmlFor="name">
        <h5> {label}</h5>
      </label>
      <input
        type="text"
        name="query"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        className="form-control"
        aria-describedby="emailHelp"
      />
    </div>
  );
};

export default SearchBox;
