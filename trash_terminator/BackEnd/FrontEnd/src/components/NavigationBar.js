import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../index.css";
import "./NavigationBar.css";

const NavigationBar = () => {
  if (sessionStorage.getItem("usertype") === "VENDOR") {
    return (
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="/">
          Trash<span style={{ color: "grey" }}> Termionator</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/orders">Orders</Nav.Link>
            <Nav.Link
              href="/login"
              onClick={() => {
                sessionStorage.removeItem("usertype");
              }}
            >
              LOGOUT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  } else if (sessionStorage.getItem("usertype") === "USER") {
    return (
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="/">
          Trash<span style={{ color: "grey" }}> Terminator</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/#myServicesRow">Our Services</Nav.Link>
            <Nav.Link
              href="/login"
              onClick={() => {
                sessionStorage.removeItem("usertype");
              }}
            >
              LOGOUT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
    return (
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="/">
          Trash<span style={{ color: "grey" }}> Terminator</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/#myServicesRow">Our Services</Nav.Link>
            <Nav.Link href="/login">LOGIN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

export default NavigationBar;
