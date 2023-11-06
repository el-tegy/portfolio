import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with Data Engineering and I have at least learnt
              something (I think…🤷‍♂️)
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python, Spark and SQL. </b>
              </i>
              <br />
              <br />
              My fields of interest are&nbsp;
              <i>
                <b className="purple">building new ETL pipelines </b> 
                and{" "}
                <b className="purple">
                implementing robust data architectures{" "}
                </b>
                that can handle 
                the influx of big data.{" "}
              </i>
              <br />
              <br />
              Moreover, I have a keen interest in
              <i>
                <b className="purple"> developing real-time data processing 
                frameworks </b>
              </i> 
              that enable businesses to make timely, 
              data-driven decisions. As a data engineer, I also{" "} 
              <i>
                <b className="purple">
                stay abreast of developments in cloud technologies </b>
              </i> 
              and continuously explore ways to{" "} 
              <i>
                <b className="purple">improve data security and compliance{" "}</b>
              </i>
              in an ever-evolving digital landscape.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/el-tegy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://fr.linkedin.com/in/elis%C3%A9e-tegue-yombi-a1455720a"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="eliseetegue@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
