import styles from './FilterButtonAll.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../../../store/filter/selector.ts';
import { allFilterReducer } from '../../../../store/filter/filterReducer.ts';


export const FilterButtonAll = ({ filterButtonName }) => {
    const filter= useSelector(selectFilter);
    const dispatch = useDispatch();
    const dispatchAction = () => {
        return dispatch(allFilterReducer({ type: 'all' }));
    }
    return (
        <button
            className={(filter.type === 'all') ? styles.filter_button__active : styles.filter_button}
            onClick={dispatchAction}>
            {filterButtonName}
        </button>
    );
};
