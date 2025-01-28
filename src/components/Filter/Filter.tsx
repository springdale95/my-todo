import FilterButtonAll from '../FilterButtonAll/FilterButtonAll.tsx';
import FilterButtonActive from '../FilterButtonActive/FilterButtonActive.tsx';
import FilterButtonDone from '../FilterButtonDone/FilterButtonDone.tsx';
import './Filter.css';
import {Link} from "react-router-dom";
import {useState} from "react";

enum FilterButtonsNames {
    All = 'Все',
    Active = 'Активные',
    Done = 'Выполненные',
}

const Filter = () => {
    const [filter, setFilter] = useState('all')

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <FilterButtonAll filter={filter} setFilter={setFilter} filterButtonName={FilterButtonsNames.All}
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/active">
                        <FilterButtonActive filter={filter} setFilter={setFilter} filterButtonName={FilterButtonsNames.Active}
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/done">
                        <FilterButtonDone filter={filter} setFilter={setFilter} filterButtonName={FilterButtonsNames.Done}
                        />
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Filter;
