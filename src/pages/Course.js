import React, { useContext } from "react";
import { CourseContext } from "../context/CourseState";
import { useParams, Redirect } from "react-router-dom";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { CourseStyle } from "./Styles";
import BreadCrumbs from "../components/BreadCrumbs";
import CourseContent from "../components/CourseContent";
import Spacer from "../components/Spacer";

const Course = () => {
  const { courses, instructors } = useContext(CourseContext);
  const { id } = useParams();

  const setCourse = courses.filter((course) => {
    return id === course.id;
  });

  const selectedCourse = setCourse[0];

  // redirect back to home if course not found
  if (!setCourse || !selectedCourse) {
    return <Redirect to="/" />;
  }

  const {
    title,
    description,
    instructorId,
    thumbnail,
    price,
    lessons,
    date,
  } = selectedCourse;

  const findInstructor = instructors.filter((instructor) => {
    return instructor.id === instructorId;
  });

  const instructor = findInstructor[0];

  return (
    <>
      <CourseStyle>
        <div className="courseHeader">
          <Container>
            <Row>
              <Col sm={8}>
                <BreadCrumbs nowAt={title} category={"IT & Development"} />
                <h1>{title}</h1>
                <p>
                  Created by <a>{instructor.name}</a> | Last Update {date}
                </p>
                <Button variant="outline-light">Wishlist</Button>{" "}
                <Button variant="outline-light">Share</Button>
              </Col>

              <Col sm={4}>
                <Card className="courseStyleCard">
                  <Card.Img
                    variant="top"
                    src={thumbnail}
                    className="courseCardImage"
                  />
                  <Card.Body>
                    <Card.Title>
                      <h2>${price}</h2>
                    </Card.Title>
                    <Card.Text>
                      <p>{description}</p>
                    </Card.Text>
                    <Button variant="danger">Join the Course Now</Button>

                    <hr />

                    <h4>Course ID #</h4>
                    <p>{id}</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <Container>
          <Row>
            <Col sm={8}>
              <Spacer />
              <h4>
                Course Content{" "}
                <small>
                  <Badge variant="secondary">
                    {lessons.length}{" "}
                    {lessons.length > 1 ? "Lectures" : "Lecture"}{" "}
                  </Badge>
                </small>
              </h4>
              {lessons.map((lesson) => {
                return <CourseContent lesson={lesson} key={lesson.id} />;
              })}
              <Spacer />
              <div className="instructor">
                <h4>I'm the Instructor</h4>
                <Spacer />
                <Container>
                  <Row>
                    <Col sm={4}>
                      <img
                        src={instructor.thumbnail}
                        alt={instructor.thumbnail}
                      />
                    </Col>
                    <Col sm={8}>
                      <a>
                        <strong>{instructor.name}</strong>
                      </a>
                      <p>{instructor.description}</p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </CourseStyle>
    </>
  );
};

export default Course;
