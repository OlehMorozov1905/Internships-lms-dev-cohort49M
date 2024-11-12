## CSS Modules

### Что такое CSS Modules?

CSS Modules позволяют писать CSS, где каждый класс автоматически ограничивается областью видимости компонента. Это значит, что каждый класс из CSS-файла становится **локальным для компонента**. Такой подход предотвращает конфликт имен и улучшает модульность.

### Как импортировать CSS Module?

Чтобы использовать CSS Module в компоненте, импортируйте его как обычный CSS-файл, но с расширением `.module.css`:

```javascript
import styles from "./myButton.module.css";
```

После импорта каждый класс можно использовать как свойство объекта `styles`, например, `styles.myButton`.

## `classnames`

### Что такое `classnames`?

`classnames` — это библиотека для удобного и гибкого добавления CSS-классов на основе различных условий. Она позволяет:

- **Добавлять классы динамически** на основе условий (например, состояния компонента).
- **Комбинировать классы** в зависимости от значений пропсов и переменных.
- **Избегать сложных тернарных операторов**, делая код более читаемым.

Чтобы использовать `classnames`, импортируйте библиотеку в файл:

```javascript
import cn from 'classnames';
```

## Пример компонента `MyButton`

Рассмотрим пример компонента кнопки, использующего CSS Modules и `classnames`.

### Файл `MyButton.tsx`

```tsx
import styles from "./myButton.module.css"; // импортируем CSS Module
import cn from 'classnames'; // импортируем библиотеку classnames

interface IMyButtonProps {
  text?: string; // Текст на кнопке
  isDanger?: boolean; // Определяет, будет ли кнопка в "опасном" стиле
  myType?: "button" | "submit" | "reset"; // Тип кнопки
  func?: () => void; // Функция, выполняемая при клике
}

const handleDefaultClick = () => {
  console.log("default click!");
};

function MyButton({
  func = handleDefaultClick,
  isDanger = true,
  text = "Click",
  myType = 'button'
}: IMyButtonProps) {
  return (
    <button
      type={myType}
      onClick={func}
      className={cn(styles.myButton, {
        [styles.btnDanger]: isDanger, // добавляем стиль btnDanger, если isDanger == true
        [styles.btnPrimary]: !isDanger // добавляем стиль btnPrimary, если isDanger == false
      })}
    >
      {text}
    </button>
  );
}

export default MyButton;
```

### Пояснение кода

1. **Импорт CSS Modules**: Мы импортируем стили из `myButton.module.css`, используя синтаксис `import styles from "./myButton.module.css";`. Теперь каждый класс в этом файле можно использовать как свойство объекта `styles`. Например, `styles.myButton` — это класс `.myButton` из CSS-модуля.

2. **Импорт библиотеки `classnames`**: Мы импортируем `classnames` (сокращенно `cn`) и используем ее для динамического добавления классов.

3. **Использование `classnames` для добавления классов**: Внутри атрибута `className` мы вызываем `cn()`:
   - Первый параметр — базовый стиль кнопки `styles.myButton`, который будет добавлен всегда.
   - Затем мы добавляем объект с условиями для других стилей.
     - `[styles.btnDanger]: isDanger` — добавляет `btnDanger`, если `isDanger` равно `true`.
     - `[styles.btnPrimary]: !isDanger` — добавляет `btnPrimary`, если `isDanger` равно `false`.

## Структура CSS Module файла `myButton.module.css`

Пример файла `myButton.module.css`, содержащего стили для кнопки:

```css
.myButton {
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
}

.btnDanger {
  background-color: red;
  color: white;
}

.btnPrimary {
  background-color: blue;
  color: white;
}
```

### Пояснение
- `.myButton` — базовый стиль для кнопки (отступы, радиус границ, размер шрифта).
- `.btnDanger` — стиль для кнопки, если она в "опасном" (danger) состоянии.
- `.btnPrimary` — стиль для обычной кнопки.

## Использование компонента `MyButton`

Вот как можно использовать компонент `MyButton`:

```tsx
<MyButton
  text="Удалить"
  isDanger={true}
  myType="button"
  func={() => alert("Вы уверены, что хотите удалить?")}
/>
```

### Пояснение

- `text="Удалить"` — текст кнопки будет "Удалить".
- `isDanger={true}` — кнопка будет в "опасном" стиле.
- `myType="button"` — тип кнопки установлен как `button`.
- `func={() => alert("Вы уверены, что хотите удалить?")}` — при нажатии на кнопку появится сообщение.

## Преимущества использования CSS Modules и `classnames`

- **Изоляция стилей**: CSS Modules предотвращают конфликты имен классов, делая стили уникальными для каждого компонента.
- **Гибкость в добавлении классов**: `classnames` позволяет удобно комбинировать стили на основе условий, что сокращает код и повышает его читабельность.
- **Чистота кода**: Условия добавления стилей с `classnames` выглядят более чистыми и читаемыми по сравнению с вложенными тернарными операторами.

Теперь у вас есть готовое руководство по использованию CSS Modules и `classnames`, которое поможет вам создать стильный и гибкий интерфейс для кнопок и других компонентов в вашем проекте.

