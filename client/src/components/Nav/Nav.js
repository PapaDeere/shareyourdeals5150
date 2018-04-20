import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-inverse">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="/"><i className="fas fa-handshake"></i></a>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className="active"><a href="/">Home <span className="sr-only">(current)</span></a></li>
          <li><a href="/newentry">Add New Entry</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/profile">Profile</a></li>
          <li><a href="index">Login</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
