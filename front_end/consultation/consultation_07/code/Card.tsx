import Message from "../Message/Message";
import style from "./card.module.css";

function Card() {
  return (
    <div className={style.cardWrapper}>
      <p className={style.fullNameTitle}>John Johnson</p>
      <Message />
    </div>
  );
}
export default Card;
