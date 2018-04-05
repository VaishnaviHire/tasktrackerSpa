import React from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import api from '../api';
import { connect } from 'react-redux';

function Task(props) {

  function update(ev) {
    let t = $(ev.target);

    let data = {};
    if(t.attr('type') === "checkbox") {
      data[t.attr('name')] = t.is(':checked');
    } else {
      data[t.attr('name')] = ev.target.value;
    }

    let action = {
      type: 'UPDATE_TASK',
      data: data,
    };
    props.dispatch(action);
  }



  function update_task_sub(ev) {
      let t = $(ev.target);
      
      let comp  = "comp_" + t.attr('name');
      let timespent = "time_" + t.attr('name');
      let new_complete = props.task.complete;
       let new_timespent = props.task.time_spent;
       let new_task = Object.assign({}, props.task);

      if(timespent in props.update_task) {
        new_task.time_spent = props.update_task[timespent];
      }

      if(comp in props.update_task) {
        new_task.complete = props.update_task[comp];
      }

      api.update_task_button(new_task,new_task.id);
  }


  let task = props.task;
  let comp = "comp_" + task.id;
  let timespent =  "time_" + task.id;
  return <tr>
        <td>{ task.user.name }</td>
        <td>{ task.title }</td>
        <td>{ task.body }</td>
        {task.complete ? ( <td> True </td> ) : ( <td> False </td> )}
        <td>{ task.time_spent }</td>
       

        <td> <input type="checkbox" name={ comp } onChange={update} /> </td>
        <td> <input type="number" step="15" name={ timespent } onChange={update}/></td>

        <td> <Button color="dark" name= {task.id} onClick={update_task_sub} >Update</Button></td>

        <td> <Button color="danger"  onClick={() => {api.delete_task(task.id);}}> Delete </Button></td>
    </tr>;
}

function state2props(state) {
  return {
    update_task: state.update_task
  };
}

export default connect(state2props)(Task);
