const FilterButtonAll = ({setFilter}) => {
    return (
        <button
            onClick={() => {setFilter("all")}}
        >
            Все
        </button>
    );
};

export default FilterButtonAll;