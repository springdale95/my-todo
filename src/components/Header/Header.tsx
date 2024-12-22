import "./Header.css"

interface IProps {
    title: string;
}

const Header = ( {title}: IProps ) => {
    return (
        <header className="header">
            <h1 className="title">
                {title}
            </h1>
        </header>
    );
};

export default Header;