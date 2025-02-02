import styles from './FilterButtonDone.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../../../store/filter/selector.ts';
import { doneFilterReducer } from '../../../../store/filter/filterReducer.ts';

type FilterButtonDoneProps = {
    filterButtonName: string;
}

export const FilterButtonDone = ({ filterButtonName }: FilterButtonDoneProps) => {
    const filter= useSelector(selectFilter);
    const dispatch = useDispatch();
    const dispatchAction = () => {
        return dispatch(doneFilterReducer({ type: 'done' }));
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

