import React from 'react'
import { Link } from "react-router-dom";
import styles from './homePage.module.css'

export default function HomePage() {
  return (
    <div className={styles.gridLessonContainer}>
      {/* <p>Home Page 🏡</p> */}
      <Link to='lesson-1'><div>Lesson 1</div></Link>
      <Link to='lesson-2'><div>Lesson 2</div></Link>
      <Link to='lesson-3'><div>Lesson 3</div></Link>
    </div>
  )
}

