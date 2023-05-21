import React, { useState } from "react";
import AuthorForm from "./AuthorForm";
import * as authorApi from "../api/authorApi";
import { toast } from "react-toastify";

function ManageAuthorPage(props) {
  const [author, setAuthor] = useState({
    id: null,
    name: "",
  });

  const handleChange = ({ target }) => {
    setAuthor({ ...author, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authorApi.saveAuthor(author).then(() => {
      props.history.push("/courses");
      toast.success("Author Saved.");
    });
  };

  return (
    <div>
      <AuthorForm
        author={author}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default ManageAuthorPage;
