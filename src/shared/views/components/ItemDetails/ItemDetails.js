import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'flux';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import './ItemDetails.scss';

class ItemDetails extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label>First name</Label>
          <Input type="text" />
        </FormGroup>
        <FormGroup>
          <Label>Last name</Label>
          <Input type="text" />
        </FormGroup>
        <FormGroup>
          <Label>Gender</Label>
          <Input type="select">
            <option>Male</option>
            <option>Female</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" />
        </FormGroup>
        <FormGroup>
          <Label>Phone</Label>
          <Input type="text" />
        </FormGroup>
        <FormGroup>
          <Label>Cell.</Label>
          <Input type="text" />
        </FormGroup>
        <FormGroup>
          <Label>Picture</Label>
          <Input type="file" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

function stateToProps(state) {
  return {};
}

/* <FontAwesome name="pencil-square-o" size="2x" /> */

export default connect(stateToProps)(ItemDetails);
