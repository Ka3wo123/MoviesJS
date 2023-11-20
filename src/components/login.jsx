import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Link to="login">
        <button
          type="button"
          className="btn btn-primary"
          style={{ backgroundColor: "#000", borderColor: "#BC25BF", color: "#BC25BF", marginRight: "50px" }}>
          LOGIN / SIGNUP
        </button>
      </Link>
    </div>
  );
};

export default Login;
