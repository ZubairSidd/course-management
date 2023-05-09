import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";
function ManageCoursPage(props) {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null || "",
    category: "",
  });

  useEffect(() => {
    const slug = props.match.params.slug;
    if (slug) {
      courseApi.getCourseBySlug(slug).then((_course) => setCourse(_course));
    }
  }, [props.match.params.slug]);

  const handleChange = ({ target }) => {
    setCourse({ ...course, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course Saved.");
    });
  };

  return (
    <>
      <h1>Manage Course</h1>
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      ></CourseForm>
    </>
  );
}

export default ManageCoursPage;
