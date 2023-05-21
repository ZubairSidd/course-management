import React from "react";

function DropdownInput(props) {
  return (
    <div className="form-group">
      <label htmlFor="author">{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          className="form-control"
        >
          <option value="">Select an Author</option>
          {props.data.map((data) => {
            return <option value={data.id}>{data.name}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default DropdownInput;
