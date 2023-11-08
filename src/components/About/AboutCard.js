import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Elisée TEGUE </span>
            from <span className="purple"> Paris, France.</span>
            <br /> I am a final year student pursuing a master's degree in Big Data for Digital 
            Transformation at ESIGELEC engineering school.
            <br />
            Additionally, I am a Data Engineer apprentice at the Center of Excellence Data of 
            ENGIE B2C France since September 2022.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /><u>Eloquence</u>: I took part in a public speaking competition during my 
              preparatory class, where I finished quarter-finalist. It was a unique experience that taught me many of 
              the essentials of public speaking.
            </li>
            <li className="about-activity">
              <ImPointRight /><u>Attending tech conferences</u>: this keeps me up to date with the latest 
              technological advances while broadening my field of expertise. That's why I took part 
              in <a href="https://techcommunity.microsoft.com/t5/educator-developer-blog/announcing-github-universe-cloud
              -skills-challenge/ba-p/3943877" target="_blank" rel="noopener noreferrer"> GitHub Universe Cloud Skills Challenge 
              2023</a> as part of this year GitHub Universe annual conference. Conferences I usually attend: Microsoft Build, Microsoft 
              Ignite, AWS re:Invent. 
            </li>
            <li className="about-activity">
              <ImPointRight /><u>Travelling</u>: To date, I've visited 05 countries (Ethiopia, Cameroon, 
              Belgium, Germany, Luxembourg).
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive every day to become a Data Engineer who produces not executable but industrializable
            code!"{" "}
          </p>
          <footer className="blockquote-footer">Elisée TEGUE</footer>
        </blockquote>
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
               
            </h1>
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
               
          </h1>
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
               
            </h1>
        <blockquote className="blockquote mb-0">
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              What do <strong className="purple">they say about me?</strong>
            </h1>
          <p style={{ color: "white" }}>
            "Elisée was able to see things that were not obvious to see..."{" "}
          </p>
          <footer className="blockquote-footer">MBO, Deputy IS-Datawarehouse Manager, ENGIE </footer>

          <p style={{ color: "white" }}>
            "Elisée went beyond my expectations..."{" "}
          </p>
          <footer className="blockquote-footer">SRC, Tech Lead, ENGIE</footer>

          <p style={{ color: "white" }}>
            "Elisée is one of the best students in his class, and shows great rigor and determination..."{" "}
          </p>
          <footer className="blockquote-footer">FB, Campus Director, ESIGELEC Poitiers</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
