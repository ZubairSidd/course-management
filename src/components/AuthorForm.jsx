import React from "react";
import TextInput from "./common/TextInput";
import styles from "../css/coursePage.css";
function AuthorForm(props) {
  return (
    <div className="author-form-container">
      <h2>Manage Author</h2>
      <form onSubmit={props.onSubmit}>
        <TextInput
          id="name"
          label="Author Name"
          name="name"
          value={props.author.name}
          onChange={props.onChange}
        />
        <input type="submit" value="Save" className="btn btn-primary mx-3" />
      </form>
    </div>
  );
}

export default AuthorForm;
