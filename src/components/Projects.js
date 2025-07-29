import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/RAG.jpeg";
import projImg2 from "../assets/Quilombus.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "RAG",
      description: "Generation of informed response",
      imgUrl: projImg1,
    },
    {
      title: "Website Quilombus",
      description: "Institutional website development",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are our projects, developed with a focus on real impact and constant innovation. Each solution represents a challenge overcome, a need met, and an idea transformed into a digital experience. We combine technology, creativity, and strategy to deliver results that matter.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Aplication</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>      
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}


/** 
 * 
 *                  <Nav.Item>
 *      <Nav.Link eventKey="second">Aplicações Mobile</Nav.Link>
 *    </Nav.Item>
 *    <Nav.Item>
 *      <Nav.Link eventKey="third">Tab 3</Nav.Link>
 *    </Nav.Item> 
 * 
 *      <Tab.Pane eventKey="second">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit  . Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
        </Tab.Pane>
*/