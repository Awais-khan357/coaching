import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logo.jpg";

export function App({ children }) {
  return (
    <div className="min-vh-100 bg-light">
      <header className="bg-white border-bottom">
        <div className="d-flex justify-content-between align-items-center px-3 py-2">
          <div className="d-flex align-items-center">
            <img
              src={logo}
              alt="Coaching Logo"
              style={{ height: "52px", width: "150px" }}
            />
          </div>
          <div>
            <span className="fw-semibold text-primary">Starc | Head Coach</span>
          </div>
        </div>
      </header>
      <div className="d-flex">
        <main className="flex-grow-1">{children}</main>
      </div>
      <footer className="text-center fw-bold py-3 text-muted small">
        All rights reserved © 2024
      </footer>
    </div>
  );
}
