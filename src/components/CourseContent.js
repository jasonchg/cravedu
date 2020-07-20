import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { AccordionStyle } from "./Styles";

const CourseContent = ({ lesson: { subtitle } }) => {
  return (
    <AccordionStyle>
      <Accordion defaultActiveKey="1" className="accordi">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            {subtitle}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </AccordionStyle>
  );
};

export default CourseContent;
