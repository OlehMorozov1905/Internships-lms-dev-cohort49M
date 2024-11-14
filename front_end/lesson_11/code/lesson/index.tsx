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


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // импортируем HashRouter из react-router-dom и оборачиваем им все приложение
  <HashRouter>
    {/* импортируем компонент Routes (пути) и оборачиваем вокруг всех компонентов */}
    <Routes>
      {/* в корневой обертке Route указываем props: element и path */}
      {/* в качестве корневого элемента указываем Layout */}
      <Route path="/" element={<Layout />}>
        {/* пути ниже будут приходить на место Outlet в Layout */}
        <Route path="/" element={<HomePage />} />
        <Route path="fetch-dog" element={<FetchDog />} />
        <Route path="hero-gallery" element={<HeroGallery data={heroes} />} />
        <Route path="lesson-1" element={<Lesson01 />} />
        <Route path="lesson-2" element={<Lesson02 />} />
        <Route path="lesson-3" element={<Lesson03 />} />
      </Route>
    </Routes>
  </HashRouter>
);




