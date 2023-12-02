import {NavLink} from "react-router-dom";

const NavBar = () => {

    const checkActiveNav = ({ isActive }) => isActive ? 'text-blue-500' : 'text-black';

    return (
        <header className="header">
            <NavLink to="/"
                     className="w-10
                                h-10
                                rounded-lg
                                bg-white
                                items-center
                                justify-center
                                flex font-bold shadow-md"
            >
                <p className="blue-gradient_text">AH</p>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="/about"
                         className={checkActiveNav}
                >
                    About
                </NavLink>
                <NavLink to="/projects"
                         className={checkActiveNav}
                >
                    Projects
                </NavLink>
            </nav>
        </header>
    );
};

export default NavBar;
