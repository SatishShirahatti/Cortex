import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CampaignPage from "../Campaign/index";
import CilentPage from "../Client/index";
import UserPage from "../User/index";
import LoginPage from "../Login/login";
import "../Header/header.css";

function Header() {
  return (
    <>
      <Router>
        <main>
          <nav>
            <ul>
              <li className="login">
                <Link to="#" className="navbar-left ">
                  <img
                    src="https://www.freepnglogos.com/uploads/nfl-logo-png/nfl-jaguars-sign-bouye-generation-jaguar-17.png"
                    alt="logo"
                    width="40"
                  />
                </Link>
              </li>
              <li>
                <Link to="/">Campaigns</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/cilents">Cilents</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={CampaignPage} />
            <Route path="/users" component={UserPage} />
            <Route path="/cilents" component={CilentPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default Header;
