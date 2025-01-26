import './Header.css';



const Header = () => {
    const title = 'my-todo';

    return (
        <header
            className="header"
        >
            <h1
                className="title"
            >
                {title}
            </h1>
        </header>
    );
};

export default Header;
