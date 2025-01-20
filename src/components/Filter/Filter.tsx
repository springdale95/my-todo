import FilterButtonAll from '../FilterButtonAll/FilterButtonAll.tsx';
import FilterButtonActive from '../FilterButtonActive/FilterButtonActive.tsx';
import FilterButtonDone from '../FilterButtonDone/FilterButtonDone.tsx';
import './Filter.css';

interface IFilter {
    filter: string;
    setFilter: (filter: string) => void;
}

enum FilterButtonsNames {
    All = 'Все',
    Active = 'Активные',
    Done = 'Выполненные',
}

const Filter = ({ filter, setFilter }: IFilter) => {
    return (
        <div>
            <FilterButtonAll
                filter={filter}
                setFilter={setFilter}
                filterButtonName={FilterButtonsNames.All}
            />

            <FilterButtonActive
                filter={filter}
                setFilter={setFilter}
                filterButtonName={FilterButtonsNames.Active}
            />

            <FilterButtonDone
                filter={filter}
                setFilter={setFilter}
                filterButtonName={FilterButtonsNames.Done}
            />
        </div>
    );
};

export default Filter;
