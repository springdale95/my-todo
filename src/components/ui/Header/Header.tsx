import styles from './../../../App.module.scss';

export const Header = () => {
    const title = 'my-todo';

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
        </header>
    );
};
