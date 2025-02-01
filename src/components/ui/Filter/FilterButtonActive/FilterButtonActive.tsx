import styles from './FilterButtonActive.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../../../store/filter/selector.ts';
import { activeFilterReducer } from '../../../../store/filter/filterReducer.ts';

export const FilterButtonActive = ({ filterButtonName }) => {
    const filter= useSelector(selectFilter);
    const dispatch = useDispatch();
    const dispatchAction = () => {
        return dispatch(activeFilterReducer({ type: 'active' }));
    }
    return (
        <button
            className={(filter.type === 'active') ? styles.filter_button__active : styles.filter_button}
            onClick={dispatchAction}>
            {filterButtonName}
        </button>
    );
};

