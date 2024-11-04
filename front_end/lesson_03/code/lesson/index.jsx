import React from "react";
import ReactDOM from "react-dom/client";
import Lesson01 from "./lessons/lesson01/Lesson01";
import "./index.css";
import Lesson03 from "./lessons/lesson03/Lesson03";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Lesson01/>
    {/* <Lesson02 /> */}
    <Lesson03/>

  </>
);
