import "./index.css";
// import avatar from "./../../public/images/avatar.png";

import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Academics() {
  return (
    <>
      <div class="">
        <div class="flex-container">
          <h2 className="name">While getting my:</h2>
          <div class="row">
            <div class="col-xs">
              <div class="module">
                <h3>SSC, i</h3>
                <div class="module-sec">
                  <li>Secured 8.4 CGPA</li>
                  <li>Studied with CBSE</li>
                  <li>Should have ended all of it here...</li>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-xs">
              <div class="module">
                <h3>HSC, i</h3>
                <div class="module-sec">
                  <li>Secured 69.69% (Proud Moment)</li>
                  <li>Studied with M-HSC boards</li>
                  <li>Was happy at the thought of my own laptop</li>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div class="row">
            <div class="col-xs">
              <div class="module">
                <h3>B.Tech Certification, i</h3>
                <div class="module-sec">
                  <li>Ahh wait</li>
                  <li>No jokes! I am stuck in the process.</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
