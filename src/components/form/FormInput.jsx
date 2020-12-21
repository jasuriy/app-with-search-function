import { rest } from "lodash";
import React from "react";
const Input = ({ label, name, error, ...rest }) => {
  return (
    <div className="form-group">
      <label className="d-flex" htmlFor="title">
        <h5> {label}</h5>
      </label>
      <input
        {...rest}
        id={name}
        name={name}
        className="form-control"
        aria-describedby="emailHelp"
      />
      {error && <div className="alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
