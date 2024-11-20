## Понимание контекста и его использование в React

**Context API** в React — это мощный инструмент, который позволяет управлять состоянием или передавать данные через дерево компонентов без необходимости явно прокидывать их через пропсы на каждом уровне. Давайте разберем концепцию контекста на примере из предоставленного кода.

---

### Что такое контекст?

Контекст создан для того, чтобы делиться данными, которые можно считать "глобальными" для определенной части приложения. Это особенно полезно для таких задач, как:

- Управление темой приложения (тёмная/светлая).
- Данные пользователя или аутентификации.
- Состояние корзины

---

### Основные шаги работы с контекстом

1. **Создание контекста**

```tsx
export const CartContext = createContext<ICartContextType | undefined>(undefined);
```

Здесь создается контекст для управления состоянием корзины. Типизируем его через интерфейс `ICartContextType`, чтобы обеспечить строгую типизацию и автодополнение.

2. **Создание провайдера**

```tsx
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<ICartItem[]>([]);

  const addToCart = (product: ICartItem) => {
    setCart(prevCart => {
      const productExist = prevCart.find(item => item.id === product.id);
      if (productExist) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
```

- `CartProvider` оборачивает всё приложение (или его часть), делая данные корзины доступными для вложенных компонентов.

1. **Создание пользовательского хука**

```tsx
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('no such context! 😵');
  }
  return context;
};
```

Пользовательский хук `useCart` упрощает доступ к данным контекста. Он включает проверку, чтобы избежать ошибок, если контекст не был настроен.

4. **Использование контекста в компонентах**

В компоненте `Cart` данные и методы контекста используются следующим образом:

```tsx
import { useCart } from "../../context/cartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="lesson-container">
      <h2>Shopping cart</h2>
      <ul>
        {cart.map(el => (
          <li key={el.id}>
            {el.title} quantity: {el.quantity}
            <button onClick={() => removeFromCart(el.id)}>Delete from cart</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={clearCart}>Clear cart</button>
      </div>
    </div>
  );
}
```

- Через хук `useCart` извлекаются данные (`cart`) и методы (`removeFromCart`, `clearCart`).
- Компонент рендерит список товаров и предоставляет возможность удаления или очистки корзины.

---

### Зачем использовать контекст?

Контекст помогает избежать проблем с "проп-дриллингом" (когда данные приходится передавать через несколько уровней пропсов). В вашем примере, данные корзины доступны в любом компоненте, обернутом `CartProvider`, без необходимости передавать их через пропсы.

---

### Как подключить контекст к приложению?

Оборачивание всего приложения провайдером:

```tsx
<CartProvider>
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="cart" element={<Cart />} />
        {/* другие маршруты */}
      </Route>
    </Routes>
  </HashRouter>
</CartProvider>
```

Теперь любые вложенные компоненты, например `Cart`, могут использовать данные контекста через хук `useCart`.

---

### Преимущества подхода

- **Глобальный доступ:** данные доступны для любого компонента в провайдере.
- **Чистота кода:** меньше пропсов, которые нужно передавать через компоненты.
- **Легкость в управлении:** централизованное хранилище для состояния, связанного с корзиной.

---

Контекст — это эффективный способ управлять состоянием, если оно необходимо нескольким уровням компонента, как в случае корзины покупок.
