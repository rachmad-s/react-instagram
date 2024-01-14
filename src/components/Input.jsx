import css from "./../css/input.module.css";

function Input(props) {
  return (
    <div className={css["input-container"]}>
      <input
        {...props}
        className={css["input"]}
      />
    </div>
  );
}

export default Input;
