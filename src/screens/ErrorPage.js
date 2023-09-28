import React from "react";
import { useRouteError } from "react-router-dom";
import "./ErrorPage.css";
function ErrorPage() {
  return (
    <div style={{ textAlign: "center" }} className="errorPage">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}

export default ErrorPage;
