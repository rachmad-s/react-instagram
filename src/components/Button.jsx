import css from "./../css/button.module.css";

function Button(props) {
  return (
    <button type="button" {...props} className={css["button"]}>
      {props.children}
    </button>
  );
}

export default Button;
