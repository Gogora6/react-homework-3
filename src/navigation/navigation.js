import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <header>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <NavLink className="nav-link" to="/companies">
            Home Page
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/" exact>
            Login
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default Navigation;
