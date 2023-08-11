import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiKalilinux,
  SiWindows11,
} from "react-icons/si";

import { DiVisualstudio } from "react-icons/di";
import { SiNotion } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows11 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotion />
      </Col>
    </Row>
  );
}

export default Toolstack;
