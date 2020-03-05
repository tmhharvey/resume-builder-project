import React from "react";
import UserDashboard from "./UserDashboard/UserDashboard";
import SideBarNavigation from "./UI/SideBarNavigation/SideBarNavigation";
import { Row, Col } from "reactstrap";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Row>
        <Col sm="2">
          <SideBarNavigation></SideBarNavigation>
        </Col>
        <Col sm="10">
          <UserDashboard></UserDashboard>
        </Col>
      </Row>
    </div>
  );
}

export default App;
