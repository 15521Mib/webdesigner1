import Navbar from "../Navbar/Navbar"

function Header() {
    return ( 
        <header className="flex justify-around bg-primary-sus text-white p-4" >
            <span>Olá, traveller</span>
            <h1> Bem-vindo ao nosso site MovieApp!</h1>
            <Navbar/>
        </header>
     );
}

export default Header;