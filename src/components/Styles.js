import styled from "styled-components";
export const HeroStyles = styled.div`
  .hero {
    position: relative;
    height: 35vh !important;
  }
  .hero-image {
    height: 100% !important;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .hero-text {
    position: absolute;
    top: 50%;
    padding: 1.4em;
    color: #222;
    width: 220px;
    background: white;
    border-radius: 0px 50px 0px 0px;
  }
`;

export const HoverView = styled.div`
  .hoverView {
    display: block;
    width: 250px;
    height: auto;
    background: #eee;
    position: absolute;
    top: 0;
    right: 0;
    padding: 16px;
    border-radius: 10%;
    box-shadow: 2px 2px 4px grey;
    font-size: 13px;
    z-index: 99;
  }
`;

export const BreadcrumbStyle = styled.div`
  .breadcrumbs {
    background-color: none !important;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-top: 10px;
  }
  .breadcrumbs a {
    margin: 4px;
  }
`;

export const AccordionStyle = styled.div`
  .accordi {
    display: block;
    width: 100%;
  }
`;
