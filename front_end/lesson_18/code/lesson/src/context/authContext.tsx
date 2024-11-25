import { createContext, useContext, useState } from "react";

// типизация данных по юзеру
interface IUser {
  accessToken: string;
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  refreshToken: string;
  username: string;
}

// типизация контекста - данные из state по юзеру
interface IAuthContextType {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

// начальное значение для state
const initialUser: IUser = {
  accessToken: "",
  email: "",
  firstName: "",
  gender: "",
  id: 0,
  image: "",
  lastName: "",
  refreshToken: "",
  username: ""
};

export const AuthContext = createContext<IAuthContextType | undefined>(undefined);

// обертка над компонентами созданная с помощью контекста
export const AuthProvider = ({ children }: { children: React.ReactNode; }) => {
  // 1. переменная содержащая данные по пользователю
  // 2.  функция для изменения значений этой переменной
  const [user, setUser] = useState<IUser>(initialUser);
  // ! этот стейт доступен для всех компонентов
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {/* за место children придут обернутые в provider компоненты */}
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('no such context! 😵')
  }
  return context;
}
