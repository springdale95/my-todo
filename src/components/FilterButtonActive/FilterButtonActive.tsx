import { IFilterButton } from '../../types/types.ts';

const FilterButtonActive = ({ filter, setFilter, filterButtonName }: IFilterButton) => {
    return (
        <button
            className={`filter-button ${filter === 'active' ? 'filter-button__active' : ''}`}
            onClick={() => {
                setFilter('active');
            }}
        >
            {filterButtonName}
        </button>
    );
};

export default FilterButtonActive;
