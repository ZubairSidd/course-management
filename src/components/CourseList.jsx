import React from "react";
import { Link } from "react-router-dom";
import coursePageStyles from "../css/coursePage.css";
function CourseList(props) {
  // console.log(

  // );

  return (
    <table className="table">
      <thead>
        <tr>
          <th>TItle</th>
          <th>Author Name</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map((course) => {
          return (
            <tr key={course.id}>
              <td>
                <Link to={`course/${course.slug}`}>{course.title}</Link>
              </td>
              <td>
                {
                  props.authors.find((author) => author.id === course.authorId)
                    ?.name
                }
              </td>
              <td>{course.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CourseList;
