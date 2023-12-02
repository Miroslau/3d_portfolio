import { NavLink } from 'react-router-dom';
import { navBarMenu } from '../../constants/nav-bar-menu.js';

const NavBar = () => {
  const checkActiveNav = ({ isActive }) =>
    isActive ? 'text-blue-500' : 'text-black';

  return (
    <header className="header">
      <NavLink
        to="/"
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
        {navBarMenu.slice(1).map(({ id, path, title }) => (
          <NavLink key={id} to={path} className={checkActiveNav}>
            {title}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default NavBar;
