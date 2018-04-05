import React from 'react';
import Task from './task';

export default function Tasks(params) {
  let tasks = _.map(params.tasks, (pp) => <Task key={pp.id} task={pp} />);
  
  return <div>
  <table className="table">
    <thead>
      <tr>
        <th>Assiged to</th>
        <th>Title</th>
        <th> Task-body</th>
        <th>Complete</th>
        <th>Time Spent</th>
    
        <th>Mark Complete</th>


        <th>Update Time <br /> (in mins)</th>
        <th></th>
        <th> Delete </th>
      </tr>
    </thead>
    <tbody>
    { tasks }
   </tbody>
  </table>
</div>;
}
