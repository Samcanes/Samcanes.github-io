import "./index.css";
// import avatar from "./../../public/images/avatar.png";

import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Landing() {
  return (
    <>
      <div>
        <Row>
          <Col>
            <div className="name-font">
              <h2 id="name">Irtesam Virani</h2>
              <br className="card-iframe" />
              <br className="card-iframe" />

              <div class="row">
                <div id="para">
                  <p>
                    Irtesam here, passionate about new Tech, UI & Cricket
                    <br />
                    <ul>
                      <li>Tech topics which i POST include Web & ML </li>
                      <li>My neurons GET future in Blockchain & AR </li>
                      <li>An Aspiring social entrepreneur</li>
                      <li>Bystander of global politics</li>
                      <li>
                        Can counter ur optimism and pessimism on same topic
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
