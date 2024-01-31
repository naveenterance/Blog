import React, { useState, useEffect } from "react";
import Data from "./components/Data";
import Articles from "./components/Articles";
import Editor from "./components/Editor";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ArticleDetails } from "./components/ArticleDetails";

const App = () => {
  const [current, setCurrent] = useState(() => {
    const storedCurrent = localStorage.getItem("current");
    return storedCurrent || "";
  });
  useEffect(() => {
    localStorage.setItem("current", current);
  }, [current]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/articles" />} />
        <Route
          path="/articles"
          element={
            <Data>
              {(data) => <Articles list={data.list} setCurrent={setCurrent} />}
            </Data>
          }
        />
        <Route
          path="editor"
          element={
            <Data>
              {(data) => <Editor list={data.list} setList={data.setList} />}
            </Data>
          }
        />
        {current && (
          <Route
            path={`/${current}`}
            element={
              <Data>
                {(data) => (
                  <ArticleDetails list={data.list} current={current} />
                )}
              </Data>
            }
          />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
