import logo from "../assets/icon.png";

const Header = () => {
    return (
        <header className="bg-white p-4 shadow-xl flex justify-between items-center">
            <img src={logo} alt="Animale" />
            <div className="w-10 h-10 bg-azul rounded-full border-4 border-azul">

            </div>
        </header>
    );
}

export default Header;