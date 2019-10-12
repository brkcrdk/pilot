import React from "react";
import "./User.css";
const User = () => {
  return (
    <ul id="user-links">
      <div id="desktop">
        <li>User</li>
        <i class="fas fa-user" />
        <li>Login</li>
        <i class="fas fa-sign-in-alt" />
      </div>
      <div id="mobile">
        <i class="fas fa-user" />
        <i class="fas fa-sign-in-alt" />
      </div>
    </ul>
  );
};

export default User;
