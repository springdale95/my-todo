export interface ITask {
    id: string;
    text: string;
    status: boolean;
}

export interface IFilterButton {
    filter: string;
    setFilter: (filter: string) => void;
}
