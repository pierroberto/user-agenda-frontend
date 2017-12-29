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
            <h1 className="title">A</h1>
          </Col>
          <Col sm="12">
            {this.props.list.map(item => {
              return <ItemView item={item} />;
            })}
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
