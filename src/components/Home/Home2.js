import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";
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
              Hello! I'm <b className="purple">Kamlesh Sharma</b> from Jaipur, India.  
              I graduated from <b>Poornima Institute of Engineering and Technology</b>  
              with a degree in <b>Computer Science and Engineering</b>, securing a 7.7 CGPA.  
              <br />
              <br />
              Currently, I'm working as a <b className="purple">Salesforce Developer</b> at  
              <b> Appsavio Private Limited</b>, where I specialize in developing and  
              optimizing <b className="purple">Salesforce applications</b>.  
              <br />
              <br />
              I have experience in <b className="purple">Apex, LWC, Flow, and Salesforce Admin</b>.  
              Apart from Salesforce, I enjoy coding in <b className="purple">Java</b> and <b>Python</b>.  
              <br />
              <br />
              My key interests include:
              <ul>
                <li>⚡ Developing scalable Salesforce solutions</li>
                <li>⚡ Web Technologies</li>
                <li>⚡ Automation & Business Process Optimization</li>
              </ul>
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
            <p>Feel free to <span className="purple">connect</span> with me:</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kamlesh-sharma-tech"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/9588923430"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kamlesh-sharma-9b695819b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kamlesh._.sharma/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
