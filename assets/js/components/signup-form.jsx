import React from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import api from '../api';
import { connect } from 'react-redux';


function SignupForm(props) {

  function update(ev) {
    let tgt = $(ev.target);

    let data = {};
    data[tgt.attr('name')] = tgt.val();
    let action = {
      type: 'UPDATE_SIGNUP_FORM',
      data: data,
    };
    props.dispatch(action);
  }

  function signup(ev) {
    api.submit_signup(props.signup);
  }


  return <div style={{padding: "4ex"}} className="col-6">
    <h2>Make a New Account</h2>
    <FormGroup>
      <Label for="name">Name</Label>
      <Input type="name" name="name" value={props.signup.name} onChange={update}/>
    </FormGroup>
   
    <FormGroup>
      <Label for="password">Password</Label>
      <Input type="password" name="password_hash" placeholder="password" value={props.signup.password_hash} onChange={update} />
    </FormGroup>
    <Button onClick={signup} color="primary" >Sign-up</Button>
  </div>;
}



function state2props(state) {
  return {
    signup: state.signup
  };
}

export default connect(state2props)(SignupForm);
