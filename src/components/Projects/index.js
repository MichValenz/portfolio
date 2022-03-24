import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";



function Projects() {
const projectList = [
  {
    name: "FiMi QA",
    image: require("../../images/FiMi.png"),
    description:
      "An employee tracking application designed specifically for quality assurance departments.",
    link: "https://mighty-reef-11767.herokuapp.com/",
  },
  {
    name: "Tech Cat",
    image: require("../../images/techcat.jpeg"),
    description:
      "This application allows users to post and track tech related blogs.",
    link: "https://dry-retreat-70520.herokuapp.com/",
  },
  {
    name: "m5",
    image: require("../../images/m5.jpg"),
    description:
      "This application allows users to quickly find videos of searched actors.",
    link: "https://michvalenz.github.io/m5/",
  },
  {
    name: "README Generator",
    image: require("../../images/readme.jpg"),
    description:
      "This backend only application creates README files for users with user input.",
    link: "https://github.com/MichValenz/README-generator",
  },
  {
    name: "note-taker",
    image: require("../../images/notetaker.jpg"),
    description:
      "From to-do lists to big ideas, Note Taker is an easy way to document and track your notes.",
    link: "https://secret-hamlet-22284.herokuapp.com/",
  },
  {
    name: "run-buddy",
    image: require("../../images/runbuddy.jpg"),
    description: "A website that offers fitness training services.",
    link: "https://michvalenz.github.io/run-buddy2/",
  },
];

 const render = (proj) => { 
  return (
    <Row className="project d-flex justify-content-around">
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img  variant="top" src={proj.image} />
          <Card.Body>
            <Card.Title>{proj.name}</Card.Title>
            <Card.Text>{proj.description}</Card.Text>
            <Button variant="primary" href={proj.link}>Go to Website</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );}

  return <div className="grid">{projectList.map(render)}</div>
}

export default Projects;