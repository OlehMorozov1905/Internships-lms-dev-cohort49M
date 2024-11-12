import { useState } from "react";

import MyButton from "../components/myButton/MyButton";
import "./styles.css";

function Consultation_04() {
  const [joke, setJoke] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  return (
    <div className="cons04Wrapper">
      <div className="card">
        <div className="jokesContainer">
          <p className="text"></p>
          <p className="text"></p>
        </div>
        <MyButton text="Get random Joke" type="button" />
      </div>
    </div>
  );
}

export default Consultation_04;
