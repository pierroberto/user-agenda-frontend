import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'flux';
import ItemView from '../ItemView/ItemView';
import { Container, Row, Col } from 'reactstrap';
import './ListView.scss';

class ListView extends Component {
  render() {
    return (
      <Container className="wrapperListView">
        <Row>
          <Col sm="12">
            <h1 className="title">A</h1>
          </Col>
          <Col sm="12">
            {this.props.list.map(item => {
              return <ItemView item={item} getUser={this.props.getUser} delUser={this.props.delUser} addUser={this.props.addUser} />;
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
