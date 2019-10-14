import React from "react";
import "./User.css";
const User = () => {
  return (
    <ul id="user-links">
      <div id="desktop">
        <li>User</li>
        <i className="fas fa-user" />
        <li>Login</li>
        <i className="fas fa-sign-in-alt" />
      </div>
      <div id="mobile">
        <i className="fas fa-user" />
        <i className="fas fa-sign-in-alt" />
      </div>
    </ul>
  );
};

export default User;
