import { FilterButtonAll, FilterButtonActive, FilterButtonDone } from '../../../components';
import styles from './Filter.module.scss'
import {Link} from "react-router-dom";

enum FilterButtonsNames {
    All = 'Все',
    Active = 'Активные',
    Done = 'Выполненные',
}

export const Filter = () => {

    return (
        <nav>
            <ul className={styles.ul}>
                <li>
                    <Link to="/">
                        <FilterButtonAll filterButtonName={FilterButtonsNames.All}
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/active">
                        <FilterButtonActive filterButtonName={FilterButtonsNames.Active}
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/done">
                        <FilterButtonDone filterButtonName={FilterButtonsNames.Done}
                        />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

