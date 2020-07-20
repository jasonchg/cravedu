import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { BreadcrumbStyle } from "./Styles";

const BreadCrumbs = ({ nowAt, category }) => {
  return (
    <BreadcrumbStyle>
      <div className="breadcrumbs">
        <a href="/">Home /</a>
        <a href="#">{category} /</a>
        <a>{nowAt}</a>
      </div>
    </BreadcrumbStyle>
  );
};

export default BreadCrumbs;
