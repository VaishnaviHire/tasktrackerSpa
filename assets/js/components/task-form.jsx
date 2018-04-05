import React from 'react';
import { Button, FormGroup, Label, Input, Radio } from 'reactstrap';
import { connect } from 'react-redux';
import api from '../api';

function TaskForm(params) {

 

 function update(ev) {
    let tgt = $(ev.target);

    let data = {};
    data[tgt.attr('name')] = tgt.val();
    let action = {
      type: 'UPDATE_FORM',
      data: data,
    };
    console.log(action);
    params.dispatch(action);
  }

  function submit(ev) {
     
       api.submit_task(params.form);

  }

 function clear(ev) {
    params.dispatch({
      type: 'CLEAR_FORM',
    });
}


let users = _.map(params.users, (uu) => <option key={uu.id} value={uu.id}>{uu.name}</option>);  
console.log("all users", params);
  return <div style={{padding: "4ex"}}>
    <h2>New Task</h2>
    <FormGroup>
      <Label for="user_id">Assign to User:</Label>
      <Input type="select" name="user_id" value={params.form.user_id} onChange={update} >
        { users }
      </Input>
    </FormGroup>

    <FormGroup>
      <Label for="title">Title</Label>
      <Input type="text" name="title" value={params.form.title} onChange={update} />
    </FormGroup>

    <FormGroup>
      <Label for="body">Body</Label>
      <Input type="textarea" name="body" value={params.form.body} onChange={update} />
    </FormGroup>

      <FormGroup>
      <Label for="time_spent">Time Spent</Label>
      <Input type="number" step="15" name="time_spent" value = {params.form.time_spent} onChange={update} />
    </FormGroup>

   <Button onClick={submit} color="primary">Create</Button>
    <Button onClick={clear}>Clear</Button>
  </div>;
}


function state2props(state) {
  console.log("rerender", state);
  return { form: state.form };
}

// Export the result of a curried function call.
export default connect(state2props)(TaskForm);
