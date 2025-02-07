import preloader from '../../../assets/preloader.gif';
import styles from '../../../App.module.scss';

export const Preloader = () => {
    return (
        <img className={styles.preloader} src={preloader} alt={'Preloader'} />
    );
};