import React from "react";
import PropTypes from 'prop-types';

export const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a href="#test" className="navbar-brand">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="#test" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#test"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More tools
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a href="#test" className="dropdown-item">
                    Action
                  </a>
                </li>
                <li>
                  <a href="#test" className="dropdown-item">
                    Another
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          { props.searchBar? <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>: ""}
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  searchBar: "true"
}

Header.propType = {
  title: PropTypes.string.isRequired,
  searchBar: PropTypes.bool
}