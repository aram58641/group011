import styles from './Error.module.scss';


function Error() {
    return(
        <div className={styles['error-box']}>
            <h1>Error 404</h1>
        </div>
    )
}

export default Error;