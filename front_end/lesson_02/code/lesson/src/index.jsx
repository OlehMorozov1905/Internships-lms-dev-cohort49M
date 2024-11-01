import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.css";
// импорт функции компонента
import Lesson02 from "./lessons/lesson02/Lesson02";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // этот пустой тег - это react фрагмент
  // мы используем его для того чтобы по правилам react
  // обернуть несколько дочерних компонентов в родитель
  <>
    <App />
    {/* вызов react компонента */}
    {/* самозакрывающийся тег с именем функции-компонента */}
    {/* не забудьте убедиться что у вас отработал импорт */}
    <Lesson02 />
  </>
);
