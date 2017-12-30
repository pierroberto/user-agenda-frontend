import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'flux';
import { Container, Row, Col, Media } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import './ItemView.scss';

class ItemView extends Component {
  showDetails = async e => {
    const user = await this.props.getUser(e);
    this.props.dispatch(new Actions().Home.edit(user));
  };
  render() {
    return (
      <Container className="item" className="wrapper">
        <Col md="9" id={this.props.item.id} onClick={e => this.showDetails(e)}>
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
          <FontAwesome name="trash" size="2x" id={this.props.item.id} onClick={e => this.props.delUser(e)} />
        </Col>
      </Container>
    );
  }
}

function stateToProps(state) {
  return {};
}

export default connect(stateToProps)(ItemView);
