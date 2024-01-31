import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Editor = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    props.setList((prevList) => [
      ...prevList,
      { title: title.replace(/ /g, "-"), content: content, author: author },
    ]);

    navigate("/articles");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        className="m-2 p-2 lg:w-1/3   rounded-lg border-4 border-slate-200 hover:border-pink-300  bg-slate-50  font-bold   focus:outline-none  focus:border-pink-300"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        type="textbox"
        placeholder="Write a Blog"
        value={content}
        rows="16"
        onChange={(e) => setContent(e.target.value)}
        class="block p-2 m-2 w-3/4  rounded-lg border-4 border-slate-200 focus:outline-none focus:border-pink-300"
      ></textarea>

      <input
        type="text"
        placeholder="Author"
        value={author}
        className="m-2 p-2 lg:w-1/3  rounded-lg border-4 border-slate-200  hover:border-pink-300  bg-slate-50  font-bold  focus:outline-none focus:border-pink-300"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button
        className="m-2 p-2 lg:w-1/6   rounded-full border-4 border-slate-200 hover:border-pink-300  bg-slate-50  font-bold"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Editor;
