import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'flux';
import { Container, Row, Col } from 'reactstrap';
import './ItemDetails.scss';

class ItemDetails extends Component {
  render() {
    return <Container>hello</Container>;
  }
}

function stateToProps(state) {
  return {};
}

export default connect(stateToProps)(ItemDetails);
