const EmptyList = ({tasks}) => {
    return (
            <h1>
                {tasks.length === 0 ? "Задач пока нет" : "Ваши задачи"}
            </h1>
    );
};

export default EmptyList;