import React from "react";

export const ArticleDetails = (props) => {
  return (
    <>
      {props.list
        .filter((article) => props.current === article.title)
        .map((filteredArticle, index) => (
          <div key={index}>
            <h2>{filteredArticle.title}</h2>
            <p>{filteredArticle.content}</p>
            <p>{filteredArticle.author}</p>
          </div>
        ))}
    </>
  );
};
