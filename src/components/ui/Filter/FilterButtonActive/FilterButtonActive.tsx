import styles from '../../../../App.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../../../store/filter/selector.ts';
import { activeFilterReducer } from '../../../../store/filter/filterReducer.ts';

type FilterButtonActiveProps = {
    filterButtonName: string;
};

export const FilterButtonActive = ({ filterButtonName }: FilterButtonActiveProps) => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const dispatchAction = () => {
        return dispatch(activeFilterReducer({ type: 'active' }));
    };

    return (
        <li>
            <button
                className={`${styles.btn_reset} ${styles.button} ${filter.type === 'active' ? styles.filter_button__active : null}`}
                onClick={dispatchAction}
            >
                {filterButtonName}
            </button>
        </li>
    );
};
