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
