import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ auth }) => {
  console.log("My Auth Status is", auth);

  const authButton = auth ? (
    <li>
      <a href="/api/logout">Logout</a>{" "}
    </li>
  ) : (
    <li>
      {" "}
      <a href="/api/auth/google">Login</a>
    </li>
  );
  return (
    <nav>
      <div class="nav-wrapper">
        <Link to="/" class="brand-logo">
          {" "}
          React SSR
        </Link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            {" "}
            <Link to="/users"> Users</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/admins"> Admins</Link>{" "}
          </li>
          {authButton}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
