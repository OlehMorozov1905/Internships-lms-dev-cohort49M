import ReactDOM from 'react-dom/client';
import './index.css';
import Lesson05 from "./lessons/lesson05/Lesson05";
import Lesson08 from "./lessons/lesson08/Lesson08";
import FetchDog from "./components/fetchDog/FetchDog";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    {/* <Lesson06/> */}
    {/* <Lesson04 /> */}
    {/* <Lesson07 /> */}
    {/* <Lesson05 /> */}
    {/* <Lesson08/> */}
    <FetchDog/>
  </>
);




