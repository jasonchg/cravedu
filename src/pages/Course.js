import React, { useContext } from "react";
import { CourseContext } from "../context/CourseState";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { CourseStyle } from "./Styles";
import BreadCrumbs from "../components/BreadCrumbs";
import CourseContent from "../components/CourseContent";

const Course = () => {
  const { courses } = useContext(CourseContext);
  const { id } = useParams();
  const setCourse = courses.filter((course) => {
    return id === course.id;
  });
  const selectedCourse = setCourse[0];
  const { title, description, instructor, thumbnail, lessons } = selectedCourse;
  return (
    <>
      <CourseStyle>
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <BreadCrumbs nowAt={title} category={"IT & Development"} />
              <h1>{title}</h1>
              <p>{description}</p>
              <p>Created by {instructor}</p>
              {lessons.map((lesson) => {
                return <CourseContent lesson={lesson} key={lesson.id} />;
              })}
            </Col>
            <Col xs={6} md={4}>
              {/* img and button */}
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </CourseStyle>
    </>
  );
};

export default Course;
