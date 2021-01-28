import React from "react";
import { Row, Col, Button } from "reactstrap";

export default props => {
  return (
    <div>
      <Row noGutters className="text-center align-items-center city-cta">
        <Col>
          <p className="looking-for-city">If you're looking to explore a new city
          <i className="fas fa-city city">

          </i>
          </p>

          <Button
            color="none"
            className="book-flight-btn"
            onClick={_ => {
              props.setPage(1);
            }}
          >
            Book a Flight
          </Button>
        </Col>
      </Row>
      <Row noGutters className="text-center big-img-container">
        <Col>
          <img
          src={require("../images/adventure.jpg")}
          alt=""
          className="big-img"
          />
        </Col>
      </Row>
    </div>
  );
};
