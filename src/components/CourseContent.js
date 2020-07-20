import React from "react";

const CourseContent = ({ lesson: { subtitle } }) => {
  return (
    <>
      <a href="#">{subtitle}</a> <br />
    </>
  );
};

export default CourseContent;
