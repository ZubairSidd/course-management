import { React, useEffect, useState } from "react";
import TextInput from "./common/TextInput";
import DropdownInput from "./common/DropdownInput";
import { getAuthors } from "../api/authorApi";
import coursePageCss from "../css/coursePage.css";
function CourseForm(props) {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    getAuthors().then((_authors) => setAuthors(_authors));
  }, []);

  return (
    <div className="form-container">
      <h2>Manage Course</h2>
      <form onSubmit={props.onSubmit}>
        <TextInput
          id="title"
          label="Title"
          name="title"
          onChange={props.onChange}
          value={props.course.title}
        />
        <DropdownInput
          label="Author"
          id="author"
          name="authorId"
          onChange={props.onChange}
          value={props.course.authorId}
          data={authors}
        />
        <TextInput
          id="category"
          label="Category"
          name="category"
          onChange={props.onChange}
          value={props.course.category}
        />
        <input type="submit" value="Save" className="btn btn-primary mx-3" />
      </form>
    </div>
  );
}

export default CourseForm;
