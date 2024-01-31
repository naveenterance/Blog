import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Articles = (props) => {
  const navigate = useNavigate();

  const handleClick = (title) => {
    props.setCurrent(title);
    navigate(`/${title}`);
  };

  const handleClear = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <div className="flex">
        <p className="lg:text-3xl  text-xl font-medium m-4 text-slate-300 ">
          {props.list.length} Articles added
        </p>
        <button
          className="m-2 lg:p-2 lg:w-1/6 w-1/2  rounded-full border-4 border-slate-300  hover:border-pink-300  bg-slate-50  font-bold"
          onClick={() => navigate("/editor")}
        >
          Add
        </button>

        <button
          className="m-2 p-2 lg:w-1/6 w-1/2  rounded-full border-4 border-slate-300  hover:border-pink-300  bg-slate-50  font-bold"
          onClick={handleClear}
        >
          Clear the Local storage
        </button>
      </div>

      <ul className="grid lg:grid-cols-3 grid-cols-1 ">
        {props.list.map((article, index) => (
          <li
            key={index}
            onClick={() => handleClick(article.title)}
            className="p-8  rounded-lg border-4 border-slate-300  hover:border-pink-300  bg-slate-50 m-1 "
          >
            <p className="text-2xl font-bold m-4">
              {article.title.replace(/-/g, " ")}
            </p>
            <p className="m-4">
              {article.content.slice(0, 100)}{" "}
              {article.content.length >= 100 && "..."}
            </p>
            <p className="font-semibold opacity-75 m-4">by {article.author}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Articles;
