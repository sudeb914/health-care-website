import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

// import Banner from "../Services/Services";
import logo from "./../../images/logo.png";
import "./Header.css";

const Header = () => {
  const {user,logOut} = useAuth();
  return (
    <div>
      <Navbar className="nav-bg" expand="lg">
        <Container>
          <Navbar.Brand to="/home">
           <NavLink to="/home">
           <img src={logo} alt="logo" />
           </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className="nav-style" to="/home">
                Home
              </NavLink>
              <NavLink className="nav-style" to="/about">
                About Us
              </NavLink>
              <NavLink className="nav-style" to="/services">
                Services
              </NavLink>
              {!user.displayName ?
              (
                <>
                  <NavLink className="nav-style" to="/signUp">
                Sign Up
              </NavLink>
              <NavLink className="nav-style" to="/login">
                Login
              </NavLink>
                </>
              ): (
                <>
                <span className="fw-bold d-flex justify-content-center align-items-center">{user.displayName}</span>
                
                <div className="d-flex justify-content-center align-items-center"> 
                <button className="signOut " onClick={logOut} >Sign Out</button>
                </div>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    

    </div>
  );
};

export default Header;
