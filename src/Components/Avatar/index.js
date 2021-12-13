import "./index.css";
import avatar from "./../../public/images/avatar.png";

import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Avatar() {
  return (
    <>
      <div>
        <Row className="center">
          <Col className="vertical-center">
            <img id="avtar-img" src={avatar} alt="avatar pic" />
            {/* <i class="bi bi-box-arrow-in-up-right"></i> */}
          </Col>
        </Row>
      </div>
    </>
  );
}
