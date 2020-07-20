import styled from "styled-components";

export const CourseStyle = styled.div`
  h1 {
    font-weight: 700;
    padding: 3px;
  }
  .courseHeader {
    width: 100%;
    height: 40%;
    background: #222;
    position: relative;
    padding-top: 2em;
    padding-bottom: 2em;
    color: #eee;
    width: 100%;
  }
  .courseStyleCard {
    box-shadow: 2px 2px 5px grey;
    position: absolute !important;
    top: 0;
    right: 0;
    color: #111;
    z-index: 99;
    width: 22rem;
  }
  .courseCardImage {
    height: 276px;
  }
`;
