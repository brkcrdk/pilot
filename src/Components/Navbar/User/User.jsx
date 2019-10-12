import React from "react";
import "./User.css";
const User = () => {
  return (
    <ul id="user-links">
      <div id="desktop">
        <li>User Link</li>
        <i class="fas fa-user" />
        <li>User Link</li>
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
