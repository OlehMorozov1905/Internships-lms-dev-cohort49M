import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from "react-router-dom";
import { heroes } from "../src/lessons/lesson05/data";
import FetchDog from "./components/fetchDog/FetchDog";
import HeroGallery from "./components/heroGallery/HeroGallery";
import HomePage from "./components/homePage/HomePage";
import './index.css';
import Layout from "./layout/Layout";
import Lesson01 from "./lessons/lesson01/Lesson01";
import Lesson02 from "./lessons/lesson02/Lesson02";
import Lesson03 from "./lessons/lesson03/Lesson03";
import Lesson04 from "./lessons/lesson04/Lesson04";
import Lesson05 from "./lessons/lesson05/Lesson05";
import Lesson06 from "./lessons/lesson06/Lesson06";
import Lesson07 from "./lessons/lesson07/Lesson07";
import Lesson08 from "./lessons/lesson08/Lesson08";
import Lesson09 from "./lessons/lesson09/Lesson09";
import Lesson10 from "./lessons/lesson10/Lesson10";
import Lesson11 from "./lessons/lesson11/Lesson11";
import Lesson12 from "./lessons/lesson12/Lesson12";
import Homework03 from "./homeworks/homework03/Homework03";
import Homework04 from "./homeworks/homework04/Homework04";
import Homework12 from "./homeworks/homework12/Homework12";
import Lesson13 from "./lessons/lesson13/Lesson13";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // импортируем HashRouter из react-router-dom и оборачиваем им все приложение
  <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    {/* импортируем компонент Routes (пути) и оборачиваем вокруг всех компонентов */}
    <Routes>
      {/* в корневой обертке Route указываем props: element и path */}
      {/* в качестве корневого элемента указываем Layout */}
      <Route path="/" element={<Layout />}>
        {/* пути ниже будут приходить на место Outlet в Layout */}
        <Route path="/" element={<HomePage/>} />
        <Route path="fetch-dog" element={<FetchDog />} />
        <Route path="hero-gallery" element={<HeroGallery data={heroes} />} />
        <Route path="lesson-1" element={<Lesson01 />} />
        <Route path="lesson-2" element={<Lesson02 />} />
        <Route path="lesson-3" element={<Lesson03 />} />
        <Route path="lesson-4" element={<Lesson04 />} />
        <Route path="lesson-5" element={<Lesson05 />} />
        <Route path="lesson-6" element={<Lesson06 />} />
        <Route path="lesson-7" element={<Lesson07 />} />
        <Route path="lesson-8" element={<Lesson08 />} />
        <Route path="lesson-9" element={<Lesson09 />} />
        <Route path="lesson-10" element={<Lesson10 />} />
        <Route path="lesson-11" element={<Lesson11 />} />
        <Route path="lesson-12" element={<Lesson12 />} />
        <Route path="lesson-13" element={<Lesson13 />} />
        <Route path="homework-3" element={<Homework03 />} />
        <Route path="homework-4" element={<Homework04 />} />
        <Route path="homework-12" element={<Homework12 />} />
      </Route>
    </Routes>
  </HashRouter>
);




