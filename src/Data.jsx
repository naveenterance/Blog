import React, { useState, useEffect } from "react";

const Data = (props) => {
  const [list, setList] = useState(() => {
    const storedList = localStorage.getItem("articleList");
    return storedList
      ? JSON.parse(storedList)
      : [
          { title: "hell", content: "fire", author: "jon" },
          { title: "hsad", content: "dfjfsj", author: "tim" },
          { title: "heasdl", content: "dfjfsj", author: "jon" },
        ];
  });

  useEffect(() => {
    localStorage.setItem("articleList", JSON.stringify(list));
  }, [list]);

  return <>{props.children({ list, setList })}</>;
};

export default Data;
