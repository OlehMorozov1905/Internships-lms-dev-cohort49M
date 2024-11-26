import { NavLink } from "react-router-dom";
import { initialUser, useAuth } from "../../context/authContext";
import { useCart } from "../../context/cartContext";
import styles from './header.module.css';




export default function Header() {
  // ! мы получем данные из контекста обращаясь к нему и получаем данные через деструктуризацию
  const { cart } = useCart();
  // ! получаем данные из контекста
  const { user, setUser } = useAuth();

  const calculateCartPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // ! функция, которая удаляет токен из local storage
  const logout = () => {
    // удаляем токен
    localStorage.removeItem('accessToken');
    // перезаписываем начальным значением юзера
    setUser(initialUser)
  };

  return (
    <header className={styles.header}>
      {user.id ? <>
        {/* эти данные мы увидим, если если user.id пришел с бека */}
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"/"}>Lessons</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"fetch-dog"}>Fetch dog</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"hero-gallery"}>Hero gallery</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"gender-form"}>Gender form</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"products"}>Products</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"cart"}>Cart</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"store"}>Store</NavLink>
        {/* LOGOUT */}
        <NavLink onClick={logout} to={"/"}>Logout</NavLink>

        <span style={{ color: 'black' }}>Сумма в корзине: {calculateCartPrice().toFixed(2)}€</span>
        {/* используем данные из контекста */}
        <span>{user.firstName}</span>

      </> : <>
        {/* эти данные увидим если user.id нет */}
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"login"}>Login</NavLink>


      </>}
    </header >
  );
}
