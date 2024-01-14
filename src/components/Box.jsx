import css from "./../css/box.module.css"

function Box(props) {
    return (
        <div className={css["box"]}>
            {props.children}
        </div>
    )
}

export default Box