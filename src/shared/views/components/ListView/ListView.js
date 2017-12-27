import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'flux';
import ItemView from '../ItemView/ItemView';
import { Container, Row, Col } from 'reactstrap';

class ListView extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12">
            <h1 className="title">B</h1>
          </Col>
          <Col sm="12">
            <ItemView />
          </Col>
        </Row>
      </Container>
    );
  }
}

function stateToProps(state) {
  return {};
}

export default connect(stateToProps)(ListView);
