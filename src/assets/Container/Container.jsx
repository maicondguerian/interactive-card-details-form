import styles from './container.module.scss';

export const Container = ({children}) => {
    return (
    <div className={styles.container}>
        <div className={styles.left}></div>
        <div className={styles.right}>{children}</div>
    </div>
    )
}