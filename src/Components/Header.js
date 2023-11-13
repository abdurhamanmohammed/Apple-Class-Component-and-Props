import React, { Component } from 'react'
import logo from "./images/icons/logo.png"
import cart from "./images/icons/cart.png"
import search from "./images/icons/search-icon.png"
export default class Header extends Component {
  render() {
    return (
      <div><header className="fixed-top">
      <div className="edu p-2">
        <div className="container  ">
          <a className="ed text-decoration-none pe-2 border-end border-1" href="#">Education Store Home</a>

          <a className="ed text-decoration-none ps-2" href="#">Exit</a>
        </div>
      </div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bga   ">
          <div className="container  ">

            <button className="navbar-toggler" type="toggle" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand d-lg-none" href="#"><img src={logo} width="20px" height="20px"
                alt=""/></a>
            <a className="navbar-brand d-lg-none" href="#"><img src={cart} width="20px" height="20px"
                alt=""/></a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <ul className="navbar-nav  mx-auto gap-lg-2 " >
                <form className="navbar-expand-ms d-md-none">
                  <input className="form-control me-2 mt-4 bg-dark text-light" type="search" placeholder="Search apple.com"
                    aria-label="Search" />

                </form>
                <hr/>

                <a className="navbar-brand d-none d-md-block" href="#"><img src={logo} width="20px"
                    height="20px" alt=""/></a>
                <li className="nav-item ">
                  <a className="nav-link " href="#">store</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">mac</a>
                </li>

                <li className="nav-item  ">
                  <a className="nav-link" href="#">ipad</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">iphone</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="#">watch</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">airpods</a>
                </li>
                <li className="nav-item  ">
                  <a className="nav-link" href="#">tv & home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">only on apple</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Accessories</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Support</a>
                </li>
                <li className="ps-1 pe-1">
                  <a className="navbar-brand d-none d-lg-block " href="#"><img src={cart} width="20px"
                      height="20px" alt=""/></a>
                </li>

                <a className="navbar-brand  d-none d-lg-block" href="#"><img src={search} width="20px"
                    height="20px" alt=""/></a>

              </ul>
            </div>


          </div>
        </nav>
      </div>
    </header></div>
    )
  }
}
