import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./index.css";

export default class Header extends Component {
  render() {
    return (
      <>
        <header className="header">
          <div className="container logo-nav-container">
            <a>LOGO</a>
            <nav className="navigation">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/add">Crear Reporte</Link>
                </li>
                <li>
                  <Link to="/seeReports">Ver Reportes</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }
}
