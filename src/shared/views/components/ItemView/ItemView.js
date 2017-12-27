import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'flux';
import { Container, Row, Col, Media } from 'reactstrap';
import './ItemView.scss';

class ItemView extends Component {
  render() {
    return (
      <Container className="item">
        <Col md="9">
          <Media>
            <Media left href="#">
              <Media object src="./dist/shared/views/components/ItemView/user.png" alt="Generic placeholder image" />
            </Media>
            <Media body>
              <Media heading>Bob Parker</Media>
              00393891561742
            </Media>
          </Media>
        </Col>
        <Col md="3">icon1 icon2</Col>
      </Container>
    );
  }
}

function stateToProps(state) {
  return {};
}

export default connect(stateToProps)(ItemView);
