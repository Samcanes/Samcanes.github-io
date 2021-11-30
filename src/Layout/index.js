import "./index.css";

import React from "react";
import { Container } from "react-bootstrap";
import useHorizontal from "@oberon-amsterdam/horizontal/hook";
import { useState } from "react";
import Header from "./Comonents/Headers";
import Landing from "./../Components/Landing";
import Avatar from "../Components/Avatar";
import Academics from "../Components/Academics";
import Projects from "../Components/Projects";
import Certificates from "../Components/Certificates";
import Contacts from "../Components/Contact";
export default function Layout() {
  const [container, setContainer] = useState();

  useHorizontal({ container: container });

  return (
    <>
      <Header></Header>
      <Container className="layout-class" fluid>
        <div
          className="fillBox"
          ref={(ref) => {
            setContainer(ref);
          }}
        >
          <div className="block" id="landing">
            <Landing></Landing>
          </div>
          <div className="block" id="avatar">
            <Avatar></Avatar>
          </div>

          <div className="block" id="academic">
            <Academics></Academics>
          </div>

          <div className="block" id="project">
            <Projects></Projects>
          </div>

          {/* <div className="block" id="project">
            <Certificates></Certificates>
          </div> */}
          <div className="block" id="project">
            <Contacts></Contacts>
          </div>
        </div>
      </Container>
    </>
  );
}
