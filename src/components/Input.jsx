import { useState } from "react";
import css from "./../css/input.module.css";

function Input(props) {
  const [showPassword, setShowPassword] = useState(
    props.type === "password" ? false : true
  );

  return (
    <div className={css["input-container"]}>
      <input
        {...props}
        type={showPassword ? "text" : "password"}
        className={css["input"]}
      />
      {props.type === "password" && props.value ? (
        <button
          className={css["button-show"]}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      ) : null}
    </div>
  );
}

export default Input;
