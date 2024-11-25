import { useFormik } from "formik";
import { useAuth } from "../../context/authContext";
import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
import "./loginForm.css";

function LoginForm() {

  const { setUser } = useAuth();

  const formik = useFormik({
    initialValues: {
      username: 'emilys',
      password: 'emilyspass'
    },
    onSubmit: (values) => {
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
        .then(data => setUser(data));
    }
  });


  return (
    <form className="login-form" onSubmit={formik.handleSubmit}>
      <MyInput onChange={formik.handleChange} value={formik.values.username} name={'username'} type={"text"} label={"Type your username:"} placeholder={"username"} />
      <MyInput onChange={formik.handleChange} value={formik.values.password} name={"password"} type={"password"} label={"Type your pass:"} placeholder={"password"} />
      <MyButton myType={"submit"} text={"submit"} isDanger={false} />
    </form>
  );
}

export default LoginForm;
