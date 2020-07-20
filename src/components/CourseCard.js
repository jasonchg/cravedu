import React, { useState } from "react";

import { Card, Button } from "react-bootstrap";
import { HoverView } from "./Styles";
import { BrowserRouter as Link } from "react-router-dom";

const CourseCard = ({
  course: { id, title, thumbnail, instructor, description },
}) => {
  const [hover, setHover] = useState(false);
  return (
    <Card
      style={{ width: "18rem", border: "none", position: "relative" }}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? (
        <HoverView>
          <div className="hoverView">
            <h4>{title}</h4>

            <small>{instructor}</small>
            <p>{description}</p>
            <Button variant="danger" href={`/course/${id}`}>
              Join Course
            </Button>
            <Button variant="link">Wishlist</Button>
          </div>
        </HoverView>
      ) : null}
      <Card.Img
        variant="top"
        src={thumbnail}
        style={{
          overflow: "hidden",
          width: 230,
          height: 150,
          borderRadius: 10,
        }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{instructor}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
