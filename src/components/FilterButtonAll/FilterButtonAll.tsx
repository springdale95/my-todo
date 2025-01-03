import { IFilterButton } from '../../types/types.ts';

const FilterButtonAll = ({ filter, setFilter, filterButtonName }: IFilterButton) => {
    return (
        <button
            className={`filter-button ${filter === 'all' ? 'filter-button__active' : ''}`}
            onClick={() => {
                setFilter('all');
            }}
        >
            {filterButtonName}
        </button>
    );
};

export default FilterButtonAll;
