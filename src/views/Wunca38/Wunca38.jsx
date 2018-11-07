import React from "react";
import { Card, CardHeader, CardBody, CardTitle, CardFooter, Row, Col } from "reactstrap";
import mascot from "assets/img/mascot.png";
import wunca_logo from "assets/img/logo_wunca.png";
import wunca38_css from "assets/wunca38/wunca38.css";

class User extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
          <Card>
          <CardHeader>
             <CardTitle>Welcome to WUNCA38 Workshop: Create own the CI/CD it easey!</CardTitle>
          </CardHeader>
          <hr/>
          <CardBody> 
              <Row>
                  <Col xs={12} md={3}> 
                    <img class="wunca-logo" src={wunca_logo} alt="..." />
                </Col>
                <Col xs={12} md={4}> 
                <img src={mascot} alt="..." /><p>Hello this example for build and deploy react web application.</p>
                </Col>
                </Row>
          </CardBody>
          <CardFooter><h3>23-25 Jan 2019</h3></CardFooter>
          </Card>

          </Col>
        </Row>
      </div>
    );
  }
}

export default User;
