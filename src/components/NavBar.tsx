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
        <div className="m-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
                <div className="container-fluid">
                <img src={logo} alt="img-logo-padel" style={{maxWidth: '150px'}} onClick={goHome}/>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
                        <div className="navbar-nav">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link  ${isActive ? "active" : ""}`
                                }
                                to='schedule'
                            >
                                Horarios
                            </NavLink>

                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link  ${isActive ? "active" : ""}`
                                }
                                to="/news"
                            >
                                Noticias
                            </NavLink>

                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link  ${isActive ? "active" : ""}`
                                }
                                to="/about"
                            >
                                Nosotros
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}


/*  */