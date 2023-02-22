


function Button({text,color="danger"}) {

    return(
        <button className={`btn btn-${color}`}>
            {text}
        </button>
    )
}

export default Button;

