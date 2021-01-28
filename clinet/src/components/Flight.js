import React from "react";
import { Row, Col } from "reactstrap";

export default props => {
  const getRow1 = _ => {
    let chairs = [];
    for (var i = 0; i < Math.ceil(props.chairs / 2); i++) {
      chairs.push(
        <span
          key={i}
          className={props.empty ? "empty-flight" : "full-flight"}
        ></span>
      );
    }
    return chairs;
  };
  const getRow2 = _ => {
    let chairs2 = [];
    for (var i = 0; i < Math.floor(props.chairs / 2); i++) {
      chairs2.push(
        <span
          key={i}
          className={props.empty ? "empty-flight" : "full-flight"}
        ></span>
      );
    }
    return chairs2;
  };

  return (
    <div className="flight-container">
      <Col
        className={props.empty ? "flight selecflight-flight" : "flight"}
        onClick={_ => {
          props.empty
            ? props.selectFlight(props.name, props.id)
            : console.log("Tried to select a full flight");
        }}
      >
        <Row noGutters className="flight-row">
          <Col className="text-center">{getRow1()}</Col>
        </Row>
        <Row noGutters className="flight-row">
          <Col className="text-center">{getRow2()}</Col>
        </Row>

        <p className="text-center flight-name">{props.name}</p>
      </Col>
    </div>
  );
};
