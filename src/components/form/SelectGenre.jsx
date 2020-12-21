import React from "react";
const Select = ({ options, name, label, error, ...rest }) => {
  //   console.log(rest);
  return (
    <div className="form-group">
      <label className="d-flex" htmlFor={name}>
        <h5>{label}</h5>
      </label>
      <select className="custom-select mr-sm-2" id={name} name={name} {...rest}>
        <option value="" />
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
