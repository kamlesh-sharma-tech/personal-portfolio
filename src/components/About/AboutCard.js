import React from "react";
import Card from "react-bootstrap/Card";
import { BsCameraFill } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kamlesh Sharma</span> from 
            <span className="purple"> Jaipur, India.</span>
            <br />
            I graduated with a <b>B.Tech in Computer Science</b> from 
            <span className="purple"> Poornima Institute of Engineering & Technology</span>.
            <br />
            <br />
            Currently, I work as a <b className="purple">Salesforce Developer</b> at  
            <b> Appsavio Private Limited</b>. My expertise lies in:
          </p>
          <ul>
            <li>⚡ Developing <b>Apex, LWC, and Aura</b> solutions</li>
            <li>⚡ Automating processes using <b>Flow & Triggers</b></li>
            <li>⚡ Implementing <b>Salesforce CPQ</b> for business efficiency</li>
            <li>⚡ Integrating Salesforce with external systems</li>
          </ul>
          <p>
            Apart from coding, some other activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <BsCameraFill /> Photography
            </li>
            <li className="about-activity">
              🎨 UI/UX Design
            </li>
            <li className="about-activity">
              📖 Exploring AI & Cloud Technologies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
