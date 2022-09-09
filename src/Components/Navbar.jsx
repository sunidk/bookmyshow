import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto  mb-lg-0 align-items-center">
              <li className="nav-item mx-5">
                <NavLink to={"/"}>
                  <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" />
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink to={"/"}>
                  <span className="nav-link active text-light">Home</span>
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink to={"/events"}>
                  <span className="nav-link active text-light ">Events</span>
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink to={"/showlist"}>
                  <span className="nav-link active text-light ">Show List</span>
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink to={"/bookmyshow"}>
                  <span className="nav-link active text-light ">
                    BookMyShow
                  </span>
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink to={"/contact"}>
                  <span className="nav-link active text-light ">
                    Contact Us
                  </span>
                </NavLink>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
