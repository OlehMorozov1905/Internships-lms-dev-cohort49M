import { BlogManagementProvider } from "../BlogManagment/BlogManagment";
import style from "./message.module.css";
import { useContext } from "react";

function Message() {
  const message = useContext(BlogManagementProvider);
  return (
    <div className={style.messageWrapper}>
      <p className={style.messageTitle}>Message:</p>
      <p className={style.messageText}>{message}</p>
    </div>
  );
}
export default Message;
