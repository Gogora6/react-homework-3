import { NavLink, Redirect } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <header>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">
            Register
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/" exact>
            <Redirect to="/login" />

          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/" exact>
            <Redirect to="/login" />
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default Navigation;
