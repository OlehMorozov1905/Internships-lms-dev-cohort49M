### Домашнее задание

#### **Задачи:**

1. **Изменение отображения данных в Header.tsx:**
   - Если пользователь **не авторизован**:
     - Покажите ссылку на страницу авторизации (`Login`).
   - Если пользователь **авторизован**:
     - Отобразите имя пользователя и ссылки на другие компоненты.

2. **Изменение главной страницы с уроками:**
   - Если пользователь **авторизован**:
     - Покажите список доступных уроков.
   - Если пользователь **не авторизован**:
     - Покажите сообщение: _"Для просмотра уроков необходимо авторизоваться."_ с кнопкой перехода на страницу авторизации.

3. **Добавьте валидацию с помощью `Yup` в форму авторизации:**
   - Убедитесь, что:
     - Поле `username` не пустое.
     - Поле `password` имеет минимум 6 символов.

----

1. **Пример логики в Header.tsx:**
   ```tsx
   import { useAuth } from '../context/authContext';

   const Header = () => {
     const { user, setUser } = useAuth();

     return (
       <header>
         {user.accessToken ? (
           <>
             <span>Welcome, {user.username}!</span>
             <button onClick={handleLogout}>Logout</button>
           </>
         ) : (
           <Link to="/login">Login</Link>
         )}
       </header>
     );
   };

   export default Header;
   ```

