import React from "react";
import { Card, CardHeader, CardBody, CardTitle, CardFooter, Row, Col } from "reactstrap";

import CardAuthor from "components/CardElements/CardAuthor.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import damirBosnjak from "assets/img/damir-bosnjak.jpg";
import mike from "assets/img/mike.jpg";
import ayoOgunseinde2 from "assets/img/faces/ayo-ogunseinde-2.jpg";
import joeGardner2 from "assets/img/faces/joe-gardner-2.jpg";
import clemOnojeghuo2 from "assets/img/faces/clem-onojeghuo-2.jpg";
import mascot from "assets/img/mascot.png";
import wunca_logo from "assets/img/logo_wunca.png";

class User extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
          <Card>
          <CardHeader>
             <CardTitle>Welcome to WUNCA38</CardTitle>
          </CardHeader>
          <CardBody> 
              <Row>
                  <Col xs={6} md={6}> 
                     <img src={mascot} alt="..." />
                </Col>
                <Col xs={6} md={6}> 
                     <img src={wunca_logo} alt="..." />
                </Col>
                </Row>
          </CardBody>
          </Card>

          </Col>
        </Row>
      </div>
    );
  }
}

export default User;
