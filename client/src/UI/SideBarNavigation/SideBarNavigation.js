import React from "react";
import { Row, Col } from "reactstrap";
import "./SideBarNavigation.scss";

const SideBarNavigation = props => {
  return (
    <div className="sidebarNavigation">
      <Row>
        <Col sm="12">
          <div className="sidebarNavigation__logoPicture">
            <h2>Logo Picture</h2>
          </div>
          <div className="sidebarNavigation__navLinks">
            <Row>
              <Col sm="12">
                <div className="sidebarNavigation__navLinks__items">
                  <h3>Resume Builder</h3>
                </div>
                <div className="sidebarNavigation__navLinks__items">
                  <h3>Cover Letter Builder</h3>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SideBarNavigation;
