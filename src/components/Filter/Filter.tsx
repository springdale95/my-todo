import FilterButtonAll from "../FilterButtonAll/FilterButtonAll.tsx";
import FilterButtonActive from "../FilterButtonActive/FilterButtonActive.tsx";
import FilterButtonDone from "../FilterButtonDone/FilterButtonDone.tsx";

interface IFilter {
    filter: string;
    setFilter: (filter: string) => void;
}

const Filter = ({ filter, setFilter }:IFilter) => {

    return (
        <div>
            <FilterButtonAll
                filter={filter}
                setFilter={setFilter}
            />
            <FilterButtonActive
                filter={filter}
                setFilter={setFilter}
            />
            <FilterButtonDone
                filter={filter}
                setFilter={setFilter}
            />
        </div>
    );
};

export default Filter;