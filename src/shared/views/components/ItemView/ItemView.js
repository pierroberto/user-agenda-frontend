import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'flux';
import { Container, Row, Col, Media } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import './ItemView.scss';

class ItemView extends Component {
  render() {
    return (
      <Container className="item" className="wrapper">
        <Col md="9">
          <Media>
            <Media left href="#">
              <Media object src={this.props.item.picture} alt="Generic placeholder image" />
            </Media>
            <Media body>
              <Media heading>
                {this.props.item.first} {this.props.item.last}
              </Media>
              {this.props.item.cell}
            </Media>
          </Media>
        </Col>
        <Col md="3">
          <FontAwesome name="trash" size="2x" />
          <FontAwesome name="pencil-square-o" size="2x" />
        </Col>
      </Container>
    );
  }
}

function stateToProps(state) {
  return {};
}

export default connect(stateToProps)(ItemView);
