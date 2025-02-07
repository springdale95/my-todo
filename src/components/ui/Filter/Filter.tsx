import { FilterButtonAll, FilterButtonActive, FilterButtonDone } from '../../../components';
import styles from '../../../App.module.scss';
import { Link } from 'react-router-dom';

enum FilterButtonsNames {
    All = 'Все',
    Active = 'Активные',
    Done = 'Выполненные',
}

export const Filter = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.filter_list}>
                <Link to="/">
                    <FilterButtonAll filterButtonName={FilterButtonsNames.All} />
                </Link>

                <Link to="/active">
                    <FilterButtonActive filterButtonName={FilterButtonsNames.Active} />
                </Link>

                <Link to="/done">
                    <FilterButtonDone filterButtonName={FilterButtonsNames.Done} />
                </Link>
            </ul>
        </nav>
    );
};
