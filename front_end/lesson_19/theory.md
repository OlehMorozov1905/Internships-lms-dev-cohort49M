### 1. **Local Storage**
`localStorage` используется для хранения данных, которые должны сохраняться даже после перезагрузки страницы или закрытия браузера. В данном случае, `accessToken` сохраняется после успешного логина:

- **Сохранение токена:**
  ```javascript
  localStorage.setItem('accessToken', data.accessToken);
  ```
  Это делается после успешного логина, чтобы сохранить токен, предоставленный сервером.

- **Удаление токена при выходе:**
  ```javascript
  localStorage.removeItem('accessToken');
  ```
  Когда пользователь выходит из системы, токен удаляется, и пользователь сбрасывается до `initialUser`.

---

### 2. **Контекст и отображение данных из него**
Контекст React позволяет управлять состоянием (например, авторизацией пользователя или содержимым корзины) на уровне всего приложения.

#### Использование контекста:
- **Получение данных:**
  ```javascript
  const { cart } = useCart();
  const { user, setUser } = useAuth();
  ```
  Эти строки извлекают данные из контекста `cartContext` и `authContext`, предоставляя доступ к данным корзины (`cart`) и пользователю (`user`).

- **Пример отображения данных:**
  Если пользователь авторизован (`user.id` существует), его имя отображается в шапке:
  ```javascript
  <span>{user.firstName}</span>
  ```

- **Функция логина:**
  После успешного логина данные пользователя (`data`) сохраняются в контексте через `setUser`.

---

### 3. **Функция Logout**
Функция logout выполняет два действия:
1. Удаляет токен из `localStorage`.
   ```javascript
   localStorage.removeItem('accessToken');
   ```
2. Сбрасывает состояние пользователя в `initialUser`, очищая контекст:
   ```javascript
   setUser(initialUser);
   ```

Это гарантирует, что пользователь больше не будет рассматриваться как авторизованный.

---

### 4. **Защищенные маршруты (Protected Routes)**
Защищенные маршруты используются для ограничения доступа к определенным компонентам.

```javascript
   import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

// пропсом будет выступать защищаемый компонент
interface ProtectedRouteProps {
  outlet: JSX.Element;
}

export default function ProtectedRoute({ outlet }: ProtectedRouteProps) {
  const { user } = useAuth();

  // если id пользователя доступно в контексте - мы показываем компонент
  if (user.id) {
    return outlet;
  }

  alert('Go and authorize! This component is not for you 🫤')

  // если id нет - перенаправляем на login компонент
  return <Navigate to={'/login'} />;
}

   ```

#### Как это работает:
1. **Проверка авторизации:**
   В компоненте `ProtectedRoute` проверяется, есть ли `user.id` в контексте:
   ```javascript
   if (user.id) {
       return outlet; // Отображается защищаемый компонент
   }
   ```

2. **Редирект на страницу логина:**
   Если пользователь не авторизован, его перенаправляют на страницу логина:
   ```javascript
   return <Navigate to={'/login'} />;
   ```

3. **Пример использования:**
   ```jsx
   <Route path="/protected" element={<ProtectedRoute outlet={<ProtectedComponent />} />} />
   ```
---

- **Logout в меню:**
  ```javascript
  <NavLink onClick={logout} to={"/"}>Logout</NavLink>
  ```

- **Навигация для неавторизованных пользователей:**
  Если пользователь не авторизован, ему доступна только кнопка логина:
  ```javascript
  <NavLink to={"login"}>Login</NavLink>
  ```

---

### 6. **Обработка форм логина**
В компоненте `LoginForm` используется `formik` для управления состоянием формы и валидацией:

- **Отправка данных на сервер:**
  Данные из формы отправляются на сервер через `fetch`. В случае успеха, пользовательские данные сохраняются в контексте:
  ```javascript
  fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password })
  }).then(res => res.json())
    .then(data => {
        setUser(data); // Сохранение данных пользователя
        localStorage.setItem('accessToken', data.accessToken); // Сохранение токена
        navigate('/'); // Перенаправление на главную
    });
  ```

- **Валидация формы:**
  Используется `Yup` для проверки корректности ввода:
  ```javascript
  const schema = Yup.object({
    username: Yup.string().required('Username is required!'),
    password: Yup.string().required('Password is required!').min(6),
  });
  ```

