import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Editor = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !props.list.some(
        (article) =>
          article.title.trim().toLowerCase() ===
          title.toLowerCase().trim().replace(/\s+/g, "-")
      )
    ) {
      props.setList((prevList) => [
        ...prevList,
        { title: title.trim().replace(/\s+/g, "-"), content, author },
      ]);

      navigate("/articles");
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        type="text"
        placeholder="Title"
        value={title}
        className="m-2 p-2 lg:w-1/3   rounded-lg border-4 border-slate-200 hover:border-pink-300  bg-slate-50  font-bold   focus:outline-none  focus:border-pink-300"
        onChange={(e) => setTitle(e.target.value)}
      />
      {error && (
        <p className="bg-red-500 text-slate-50 lg:w-1/4 m-2 p-2 rounded-xl flex justify-center ">
          !!! Please make the title more unique !!!
        </p>
      )}
      <textarea
        required
        type="textbox"
        placeholder="Write a Blogpost"
        value={content}
        rows="16"
        onChange={(e) => setContent(e.target.value)}
        className="block p-2 m-2 w-3/4  rounded-lg border-4 border-slate-200 focus:outline-none focus:border-pink-300"
      ></textarea>

      <input
        required
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
