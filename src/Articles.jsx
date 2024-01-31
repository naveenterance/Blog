import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Articles = (props) => {
  const navigate = useNavigate();

  const handleClick = (title) => {
    props.setCurrent(title);
    navigate(`/${title}`);
  };

  return (
    <>
      <ul>
        {props.list.map((article, index) => (
          <li key={index} onClick={() => handleClick(article.title)}>
            <p>{article.title}</p>
            <p>{article.content}</p>
            <p>{article.author}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate("/editor")}>---Add---</button>
    </>
  );
};

export default Articles;
