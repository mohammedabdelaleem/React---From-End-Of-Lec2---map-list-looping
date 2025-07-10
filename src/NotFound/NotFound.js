import React from "react";
import { Link } from "react-router-dom"; // if you're using react-router
import notfoundIamge from "../images/404.jpg"

export default function NotFound() {
  return (
    <div className="container text-center my-5">
      <h1 className="display-3 text-danger">404</h1>
      <h2>Page Not Found</h2>
      <img src={notfoundIamge} alt="Not Found" style={{ maxWidth: "300px" }} />
      <p className="lead">The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary mt-3">
        Go Home
      </Link>
    </div>
  );
}
