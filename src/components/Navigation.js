import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../styles/Navigation.css";

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: true,
    };

    this.collapseMenu = this.collapseMenu.bind(this);
  }

  collapseMenu = () => {
    this.setState({ collapse: !this.state.collapse });
  };
  render() {
    return (
      <div className="navigation">
        <div className="logo-wrapper">
          <img
            src="https://via.placeholder.com/300x100?Logo+Image"
            alt=""
            srcset=""
          />
        </div>
        <div
          className="nav-collapse desktop"
          onClick={() => {
            this.collapseMenu();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-menu-2"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>
        <div
          className={this.state.collapse ? "nav-links collapse" : "nav-links"}
        >
          <div className="nav-link">
            <Link
              to="/"
              onClick={() => {
                this.collapseMenu();
              }}
            >
              <p>Reddit Photoshop Battle</p>
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="/Photoshop-Battle"
              onClick={() => {
                this.collapseMenu();
              }}
            >
              <p>Photoshop Battle</p>
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="/Drawing-Battle"
              onClick={() => {
                this.collapseMenu();
              }}
            >
              <p>Drawing Battle</p>
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="/About"
              onClick={() => {
                this.collapseMenu();
              }}
            >
              <p>About</p>
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="/FAQ"
              onClick={() => {
                this.collapseMenu();
              }}
            >
              <p>FAQ</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
