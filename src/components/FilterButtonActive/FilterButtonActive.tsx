const FilterButtonActive = ({setFilter}) => {
    return (
        <button
            onClick={() => {setFilter("active")}}
        >
            Активные
        </button>
    );
};

export default FilterButtonActive;