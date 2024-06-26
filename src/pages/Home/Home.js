import React, { useState } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import DynamicTyping from "../../components/DynamicTyping";
import About from "../../components/About";
import Timeline from "../../components/Timeline/Timeline";
import homeConfig from "../../assets/configs/homeConfig";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import ContactCard from "../../components/contactcard"; 

import "./Home.css";

const Home = () => {
  const [view, setView] = useState('internships');

  return (
    <section>
      <Container fluid className="home-content" id="home">
        <Row>
          <Col className="home-header" style={{ textAlign: "left" }}>
            <div>
              {homeConfig.greeting}
            </div>
            <div style={{ textAlign: "center" }}>
              <DynamicTyping titles={homeConfig.titles} />
            </div>
            <div className="about">
              <About about={homeConfig.about} />
              <div className="connecting-line line-above"></div>
            </div>
            <Row className="toggle-buttons text-center my-4">
              <Col>
                <Button
                  variant={view === 'qualifications' ? "primary" : "outline-primary"}
                  onClick={() => setView('qualifications')}
                  className={view === 'qualifications' ? "active" : ""}
                >
                  Qualifications
                </Button>
              </Col>
              <Col>
                <Button
                  variant={view === 'internships' ? "primary" : "outline-primary"}
                  onClick={() => setView('internships')}
                  className={view === 'internships' ? "active" : ""}
                >
                  Internships
                </Button>
              </Col>
              <div className="connecting-line line-below"></div>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className="resume-content" id="resume">
        <div className="col-md-8 mx-auto">
          {view === 'internships' ? (
            <Timeline items={homeConfig.workTimeline} type="work" />
          ) : (
            <Timeline items={homeConfig.qualificationsTimeline} type="qualifications" />
          )}
        </div>
        <div className="resume-button text-center my-4">
          <a href={homeConfig.resumeButton.url} target="_blank" rel="noopener noreferrer">
            {homeConfig.resumeButton.text}
          </a>
        </div>
      </Container>
      <Container fluid className="contact-section">
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="contact-col">
            <ContactCard />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
