import {IFilterButton} from "../../types/types.ts";

const FilterButtonDone = ({ filter, setFilter }:IFilterButton) => {
    return (
        <button
            className={`filter-button ${(filter === "done") ? "filter-button__active" : ""}`}
            onClick={() => {setFilter("done")}}
        >
            Выполненные
        </button>
    );
};

export default FilterButtonDone;