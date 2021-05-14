import React from 'react'
import {Switch, Route, NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <div className="NavBar">
            <nav className="nav">
               <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active">
                            Portfolios
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div className="main-content">
          <div className="content">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/Home" exact>
                <Home />
              </Route>
              <Route path="/Home" exact>
                <Home />
              </Route>
              <Route path="/Home" exact>
                <Home />
              </Route>
              <Route path="/Home" exact>
                <Home />
              </Route>
            </Switch>
          </div>
      </div>

                <footer className="footer">
                    <p>
                        @May2021 Rajendra Taradale
                    </p>
            </footer>
            </nav>
            
        </div>
    )
}

export default Navbar;

const Home = () => {
    return ( <>Hi Home</> );
}
 