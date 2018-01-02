import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'flux';
import { Container, Row, Col, Media, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import './ItemView.scss';

class ItemView extends Component {
  viewDetails = e => {
    this.props.getUser(e).then(user => {
      this.props.dispatch(new Actions().Home.edit(user));
    });
  };
  render() {
    return (
      <Container className="item">
        <Col md="9" id={this.props.item.id}>
          <Media>
            <Media left>
              <Media object src={this.props.item.picture} alt="Generic placeholder image" className="wrapperItemView__pic" />
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
          <div className="item__iconContainer">
            <FontAwesome className="item__iconTrash" name="trash" size="2x" id={this.props.item.id} onClick={e => this.props.delUser(e)} />
          </div>
          <div className="item__iconContainer">
            <FontAwesome className="item__iconPencil" name="pencil" size="2x" id={this.props.item.id} onClick={e => this.viewDetails(e)} />
          </div>
        </Col>
      </Container>
    );
  }
}

function stateToProps(state) {
  return {};
}

export default connect(stateToProps)(ItemView);
