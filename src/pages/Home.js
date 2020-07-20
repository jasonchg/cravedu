import React, { useContext } from "react";
import { CourseContext } from "../context/CourseState";

import Spacer from "../components/Spacer";
import Hero from "../components/Hero";
import CourseList from "../components/CourseList";
import { Container, Row } from "react-bootstrap";

const Home = () => {
  const { courses } = useContext(CourseContext);
  console.log(courses);
  return (
    <>
      <Hero />
      <Spacer />
      <Container>
        <CourseList title="Current Course" courses={courses} />
      </Container>
    </>
  );
};

export default Home;
