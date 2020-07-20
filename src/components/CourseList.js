import React from "react";
import CourseCard from "./CourseCard";
import Spacer from "./Spacer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CourseList = ({ title, courses }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <h2>{title}</h2>
      <Spacer />
      <Carousel responsive={responsive}>
        {courses.map((course) => {
          return <CourseCard course={course} key={course.id} />;
        })}
      </Carousel>
    </div>
  );
};

export default CourseList;
