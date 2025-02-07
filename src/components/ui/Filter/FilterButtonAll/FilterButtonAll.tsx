import styles from '../../../../App.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../../../store/filter/selector.ts';
import { allFilterReducer } from '../../../../store/filter/filterReducer.ts';

type FilterButtonAllProps = {
    filterButtonName: string;
};

export const FilterButtonAll = ({ filterButtonName }: FilterButtonAllProps) => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const dispatchAction = () => {
        return dispatch(allFilterReducer({ type: 'all' }));
    };

    return (
        <li className={styles.list_item}>
            <button
                className={`${styles.btn_reset} ${styles.button} ${filter.type === 'all' ? styles.filter_button__active : null}`}
                onClick={dispatchAction}
            >
                {filterButtonName}
            </button>
        </li>
    );
};
