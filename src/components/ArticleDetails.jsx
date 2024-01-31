import React from "react";

export const ArticleDetails = (props) => {
  return (
    <>
      {props.list
        .filter((article) => props.current === article.title)
        .map((article, index) => (
          <div
            key={index}
            className="p-8 shadow-lg  lg:w-3/4 mx-auto mt-4 bg-slate-50"
          >
            <p className="lg:text-4xl text-4xl font-bold  underline">
              {article.title.replace(/-/g, " ")}
            </p>
            <p className="my-12 lg:mx-8">{article.content}</p>
            <p className="font-semibold opacity-75  text-lg  mt-2 underline">
              by {article.author}
            </p>
          </div>
        ))}
    </>
  );
};