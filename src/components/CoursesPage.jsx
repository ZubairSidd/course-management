import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import { getAuthors } from "../api/authorApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import styles from "../css/style.css";
import coursePage from "../css/coursePage.css";
function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  useEffect(() => {
    getAuthors().then((_authors) => setAuthors(_authors));
  }, []);

  return (
    <main className="courses-page">
      <h2 className="page-title">Courses</h2>
      <div className="button-group">
        <Link className="btn btn-primary" to="/course">
          Add Course
        </Link>
        <Link className="btn btn-primary" to="/author">
          Add Author
        </Link>
      </div>
      <CourseList courses={courses} authors={authors} />
    </main>
  );
}

export default CoursesPage;
