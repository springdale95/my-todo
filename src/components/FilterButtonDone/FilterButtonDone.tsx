const FilterButtonDone = ({setFilter}) => {
    return (
        <button
            onClick={() => {setFilter("done")}}
        >
            Выполненные
        </button>
    );
};

export default FilterButtonDone;