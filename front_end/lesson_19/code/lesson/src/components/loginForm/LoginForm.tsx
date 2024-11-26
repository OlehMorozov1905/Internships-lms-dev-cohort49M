import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { useAuth } from "../../context/authContext";
import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
import "./loginForm.css";

const schema = Yup.object({
  username: Yup
    .string()
    .required('Username is required!'),
  password: Yup
    .string()
    .required('Password is required!')
    .min(6, 'Password needs to be more than 6 characters!')
});

function LoginForm() {
  // ! забираем данные из контекста
  const { setUser } = useAuth();
  //  используя navigate мы перенаправляем юзера на главную страницу
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: 'emilys',
      password: 'emilyspass'
    },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      // передаем в post запросе данные из input
      fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: values.username,
          password: values.password
        })
      })
        .then(res => res.json())
        // ! передаем данные в контекст
        .then(data => {
          resetForm();
          setUser(data);
          localStorage.setItem('accessToken', data.accessToken)
          navigate('/');
        });
    }
  });


  return (
    <form className="login-form" onSubmit={formik.handleSubmit}>
      <MyInput error={formik.errors.username} onChange={formik.handleChange} value={formik.values.username} name={'username'} type={"text"} label={"Type your username:"} placeholder={"username"} />
      <MyInput error={formik.errors.password} onChange={formik.handleChange} value={formik.values.password} name={"password"} type={"password"} label={"Type your pass:"} placeholder={"password"} />
      <MyButton myType={"submit"} text={"submit"} isDanger={false} />
    </form>
  );
}

export default LoginForm;
