import { BrowserRouter, Link, useHistory } from 'react-router-dom';
import { Data } from './Data';
import './style-sidebar.css';

function Sidbar(props) {
  let history = useHistory();
  return (
    <>
      <BrowserRouter>
        <nav className={props.sidebar ? 'nav-menu active' : 'nav-menu'}>
          <div className="close" onClick={props.showSidebar}>
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
          <ul className="nav-menu-items">
            <div className="s2">
              <i className="fa fa-shopping-bag" aria-hidden="true"></i>
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
            <div className="space s1"></div>
            {Data.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link
                    className="nav-link"
                    onClick={() =>
                      history.push({
                        pathname: item.path,
                      })
                    }
                    to={item.path}
                    activeClassName="is-active"
                  >
                    {item.title}
                  </Link>
                  <div className="space"></div>
                </li>
              );
            })}
            <div className="social">
              <i class="fa fa-facebook" aria-hidden="true"></i>
              <i class="fa fa-caret-right" aria-hidden="true"></i>
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </div>
          </ul>
        </nav>
      </BrowserRouter>
    </>
  );
}

export default Sidbar;
