import styles from "./Input.module.scss";

function Input({ type = 'text', style = "control" }) {
    return (
        <input
            type={type}
            className={`${styles["input-radio"]} form-${style} mt-3`}
        />
    );
}

export default Input;
