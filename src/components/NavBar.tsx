import { NavLink, useNavigate } from "react-router-dom";
import logo from '../assets/images/logo2.png'

export const NavBar = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate("home", {
            replace: true
        });
    }
    return (
        <nav className="flex justify-between p-3">
            <img src={logo} alt="img-logo-padel" className="w-40" onClick={goHome} />
            <div className="flex place-items-center items-center p-2">
                <NavLink
                    className="p-2"
                    to='schedule'
                >
                    Horarios
                </NavLink>

                <NavLink
                    className="p-2"
                    to="/news"
                >
                    Noticias
                </NavLink>

                <NavLink
                    className="p-2"
                    to="/about"
                >
                    Nosotros
                </NavLink>
            </div>
        </nav>
    )
}