import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import styles from './homePage.module.css';

export default function HomePage() {
  // ! мы можем забирать данные из контекста используя useContext напрямую
  // const context = useContext(AuthContext);
  const { user } = useAuth();

  return (
    <>
      {/* вопросительный знак перед обращением к ключу объекта - это проверка на undefined - если объекта не существуют мы не будем обращаться к его ключу */}
      {/* <p>{context?.user.email}</p> */}
      {user.id ? <>
        <div className={styles.gridLessonContainer}>
          <Link to='homework-3'><div className={styles.homework}>Homework 3</div></Link>
          <Link to='homework-4'><div className={styles.homework}>Homework 4</div></Link>
          <Link to='homework-12'><div className={styles.homework}>Homework 12</div></Link>
          {/* <p>Home Page 🏡</p> */}
          <Link to='lesson-1'><div>Lesson 1</div></Link>
          <Link to='lesson-2'><div>Lesson 2</div></Link>
          <Link to='lesson-3'><div>Lesson 3</div></Link>
          <Link to='lesson-4'><div>Lesson 4</div></Link>
          <Link to='lesson-5'><div>Lesson 5</div></Link>
          <Link to='lesson-6'><div>Lesson 6</div></Link>
          <Link to='lesson-7'><div>Lesson 7</div></Link>
          <Link to='lesson-8'><div>Lesson 8</div></Link>
          <Link to='lesson-9'><div>Lesson 9</div></Link>
          <Link to='lesson-10'><div>Lesson 10</div></Link>
          <Link to='lesson-11'><div>Lesson 11</div></Link>
          <Link to='lesson-12'><div>Lesson 12</div></Link>
          <Link to='lesson-13'><div>Lesson 13</div></Link>
          <Link to='lesson-14'><div>Lesson 14</div></Link>
        </div>
      </> : <>
        <div className="lesson-container">
          <h4>Для просмотра уроков необходимо авторизоваться!</h4>
        </div>
      </>}


    </>
  );
}

