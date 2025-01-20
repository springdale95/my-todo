import { IFilterButton } from '../../types/types.ts';

const FilterButtonDone = ({ filter, setFilter, filterButtonName }: IFilterButton) => {
    return (
        <button
            className={`filter-button ${filter === 'done' ? 'filter-button__active' : ''}`}
            onClick={() => {
                setFilter('done');
            }}
        >
            {filterButtonName}
        </button>
    );
};

export default FilterButtonDone;
