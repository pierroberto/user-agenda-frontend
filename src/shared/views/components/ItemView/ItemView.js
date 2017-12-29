import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'flux';
import { Container, Row, Col, Media } from 'reactstrap';

class ItemView extends Component {
  render() {
    console.log('props', this.props);
    return (
      <Container className="item">
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
        <Col md="3">icon1 icon2</Col>
      </Container>
    );
  }
}

function stateToProps(state) {
  return {};
}

export default connect(stateToProps)(ItemView);
