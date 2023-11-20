import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ryan Alieh </span>
            from <span className="purple"> Beyrut, Lebanon.</span>
            <br /> I am a young developer and ethical hacker hobbyist and full time student.
            <br />
            Additionally, I am currently employed as a bot developer at
            Lucie.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Horse Back Riding
            </li>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
            <li className="about-activity">
              <ImPointRight /> other than that, i like talking to zaina.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The quieter you are, the more you can listen."{" "}
          </p>
          <footer className="blockquote-footer">Kali Linux</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
