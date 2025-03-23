import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// Import certificate images (if stored in src/assets)
import adminCert from "../../Assets/salesforce_admin.png";
import aiAssociateCert from "../../Assets/salesforce_ai_associate.png";
import pd1Cert from "../../Assets/salesforce_pd1.png";
import dataCloudCert from "../../Assets/salesforce_data_cloud.png";
import agentforceCert from "../../Assets/salesforce_agentforce.png";

function Certificates() {
  // List of certificates
  const certificates = [
    { id: 1, title: "Salesforce Admin", img: adminCert },
    { id: 2, title: "Salesforce AI Associate", img: aiAssociateCert },
    { id: 3, title: "Salesforce Platform Developer I", img: pd1Cert },
    { id: 4, title: "Salesforce Data Cloud Consultant", img: dataCloudCert },
    { id: 5, title: "Salesforce Agentforce Specialist", img: agentforceCert },
  ];

  return (
    <Container fluid className="certificate-section">
      <h1 className="purple" style={{ textAlign: "center", marginBottom: "30px" }}>
        My Certificates
      </h1>
      <Row>
        {certificates.map((cert) => (
          <Col md={4} key={cert.id} className="certificate-card">
            <Card className="certificate-item">
              <Card.Img variant="top" src={cert.img} alt={cert.title} />
              <Card.Body>
                <Card.Title>{cert.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Certificates;
