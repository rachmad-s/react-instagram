import css from "./../css/page.module.css"

function Page(props) {

    const center = props.center ? css["center"] : ""

    return (
        <div className={css["page"] + " " + center}>
            {props.children}
        </div>
    )
}

export default Page