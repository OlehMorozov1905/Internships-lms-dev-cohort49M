import { createContext, useContext, useEffect, useState } from "react";

interface IUser {
  accessToken?: string;
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  refreshToken: string;
  username?: string;
}

export const initialUser: IUser = {
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

interface IAuthContextType {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

// ! создаем контекст с помощью createContext()
export const AuthContext = createContext<IAuthContextType | undefined>(undefined);


// ! создаем компонент-обертку с помощью созданного контекста
// наполняем контекст данными и передаем их в value
export const AuthProvider = ({ children }: { children: React.ReactNode; }) => {
  const [user, setUser] = useState<IUser>(initialUser);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // переменная в которую придет token из local storage хранилища в браузере
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    if (accessToken) {
      fetch('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setUser(data)
        });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, setIsLoading, isLoading }}>
      {/* <h1>Привет из контекста</h1> */}
      {children}
    </AuthContext.Provider>
  );
};



// ! создаем хук для работы с выбранным контекстом
// внутри он использует useContext() для того чтобы забрать данные
// делает проверку на undefined
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('no such context! 😵');
  }
  return context;
};
