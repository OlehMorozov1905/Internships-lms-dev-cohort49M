import { NavLink, Outlet } from "react-router-dom";
import styles from './layout.module.css';

export default function Layout() {
  
  return (
    <>
      <header className={styles.header}>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"/"}>Home page</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"fetch-dog"}>Fetch dog</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"hero-gallery"}>Hero gallery</NavLink>
      </header >
      <main>
        {/* за место компонента Outlet будут приходить переключаемые компоненты из маршрутизации */}
        <Outlet />


      </main>
    </>
  );
}
