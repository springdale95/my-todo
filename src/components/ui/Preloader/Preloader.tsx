import preloader from '../../../assets/preloader.gif'
import styles from './Preloader.module.scss'

export const Preloader = () => {
    return (
        <img className={styles.img} src={preloader} alt={'Preloader'}/>
    );
};