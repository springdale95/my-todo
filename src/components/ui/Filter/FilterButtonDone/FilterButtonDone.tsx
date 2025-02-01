import styles from './FilterButtonDone.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../../../store/filter/selector.ts';
import { allFilterReducer } from '../../../../store/filter/filterReducer.ts';

export const FilterButtonDone = ({ filterButtonName }) => {
    const filter= useSelector(selectFilter);
    const dispatch = useDispatch();
    const dispatchAction = () => {
        return dispatch(allFilterReducer({ type: 'done' }));
    }
    return (
        <button
            className={(filter.type === 'done') ? styles.filter_button__active : styles.filter_button}
            onClick={dispatchAction}
        >
            {filterButtonName}
        </button>
    );
};

