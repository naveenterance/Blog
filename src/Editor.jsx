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
    if (!props.list.some((articles) => articles.title.includes(title))) {
      props.setList((prevList) => [
        ...prevList,
        { title: title.replace(/ /g, "-"), content, author },
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mx-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
          Please make the title more unique
        </p>
      )}
      <textarea
        required
        type="textbox"
        placeholder="Write a Blogpost"
        value={content}
        rows="16"
        onChange={(e) => setContent(e.target.value)}
        class="block p-2 m-2 w-3/4  rounded-lg border-4 border-slate-200 focus:outline-none focus:border-pink-300"
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
