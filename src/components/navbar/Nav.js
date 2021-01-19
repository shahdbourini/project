import { NavLink, BrowserRouter, useHistory } from 'react-router-dom';
import logo from '../../images/logo.png';
import './style-nav.css';

function Nav(props) {
  let history = useHistory();
  return (
    <>
      <nav className={props.x.join(' ')}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <button
          className="navbar-toggler ml-auto  "
          type="button"
          aria-label="Toggle navigation"
          onClick={props.showSidebar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mt-3" id="navbarNavDropdown">
          <BrowserRouter>
            <ul
              className="nav navbar-nav ml-auto "
              style={{ marginBottom: `16px` }}
            >
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  onClick={() => history.push('/Home')}
                  to="/Home"
                  activeClassName="is-active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  onClick={() => history.push('/Tours')}
                  to="/Tours"
                  activeClassName="is-active"
                >
                  Tours
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  onClick={() => history.push('/Places')}
                  to="Places"
                  activeClassName="is-active"
                >
                  Places
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  onClick={() => history.push('/About')}
                  to="About"
                  activeClassName="is-active"
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  onClick={() => history.push('/Contact')}
                  to="Contact"
                  activeClassName="is-active"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </BrowserRouter>
        </div>
        <div className="icons nav-item">
          <i className="fa fa-shopping-bag" aria-hidden="true"></i>
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </nav>
    </>
  );
}

export default Nav;
