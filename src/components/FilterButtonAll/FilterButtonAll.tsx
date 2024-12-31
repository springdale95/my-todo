import {IFilterButton} from "../../types/types.ts";
import "./FilterButtonAll.css"

const FilterButtonAll = ({ filter,setFilter }:IFilterButton) => {
    return (
        <button
            className={`filter-button ${(filter === "all") ? "filter-button__active" : ""}`}
            onClick={() => {setFilter("all")}}
        >
            Все
        </button>
    );
};

export default FilterButtonAll;