import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import classes from "./Jumbotron.module.css";

const Jumbotron = () => (
  <Jumbo fluid className={classes.jumbo}>
    <div className={classes.overlay}></div>
    <Container>
      <h1 className={classes.textHeader}>
        <p>
          <b>
            {" "}
            <span style={{ color: "grey" }}>Trash</span>{" "}
            <span style={{ color: "#49b7f4" }}>Terminator</span>{" "}
          </b>
        </p>
      </h1>
      <p className={classes.textHeaderPara}>
        Sell Your Trash at your <b style={{ color: "#49b7f4" }}>door step </b>{" "}
        and contribute in{" "}
        <b style={{ color: "#49b7f4" }}>proper waste managment</b>. So that we
        can make our country{" "}
        <b style={{ color: "#49b7f4" }}>green and clean. </b>
      </p>
      <div className={classes.myCoutainer}>
        <a href="/login" className={classes.jumboButton}>
          <b>Get Started</b>
        </a>
      </div>
    </Container>
  </Jumbo>
);

export default Jumbotron;
