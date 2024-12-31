import FilterButtonAll from "../FilterButtonAll/FilterButtonAll.tsx";
import FilterButtonActive from "../FilterButtonActive/FilterButtonActive.tsx";
import FilterButtonDone from "../FilterButtonDone/FilterButtonDone.tsx";

const Filter = ({filter, setFilter}) => {

    return (
        <div>
            <FilterButtonAll
                setFilter={setFilter}
            />
            <FilterButtonActive
                setFilter={setFilter}
            />
            <FilterButtonDone
                setFilter={setFilter}
            />
        </div>
    );
};

export default Filter;