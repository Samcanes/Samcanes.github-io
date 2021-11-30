import "./index.css";
import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Resume from "./../../public/Irtesam-Virani.pdf";

export default function Contacts() {
  return (
    <>
      <div>
        <Container>
          <Row>
            <p>Resume:</p>
          </Row>
          <Row>
            <iframe className="resume-frame" src={Resume}></iframe>
          </Row>
          <br />
          <Row>
            <p>Contact the author of this page:</p>
          </Row>
          <Row>
            <form
              action="https://formsubmit.co/dd1fd642a00c4898f58b5afe59ca9d40"
              method="POST"
              encType="multipart/form-data"
            >
              <Row>
                <Col>
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      name="name"
                      placeholder="Your name"
                    />
                  </div>
                </Col>
                <Col>
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="email"
                      name="replyto"
                      placeholder="Your email"
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <input
                    class="form-control"
                    type="text"
                    name="message"
                    placeholder="Feedback here"
                  />
                </Col>
              </Row>

              <div className="center">
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </Row>
          <br />
          <Row>
            <address>
              <a className="center" href="mailto:irtesam.virani@gmail.com">
                <p className="add-urls"> 📧</p>
                <p className="add-urls"> irtesam.virani@gmail.com</p>
              </a>
            </address>
          </Row>
        </Container>
      </div>
    </>
  );
}
