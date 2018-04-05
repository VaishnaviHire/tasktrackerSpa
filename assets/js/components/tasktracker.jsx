import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import Nav from './nav';
import Users from './users';
import TaskForm from './task-form';
import SignupForm from './signup-form';
import Tasks from './tasklist';

export default function tasktracker_init(store) {
    ReactDOM.render(
    <Provider store={store}>
      <Tasktracker state = {store.getState()} />
    </Provider>,
    document.getElementById('root'),
  );
}

class TaskTracker extends React.Component{

  constructor(props){
  super(props);
}

render(){

  if (this.props.token) {
return   <Router>
      <div>
        <Nav />
        <Route path="/" exact={true} render={() =>
         <TaskForm users= {this.props.users} />}/>

   
       <Route path="/tasks" exact={true} render={() =>
            <Tasks tasks={_.filter(this.props.tasks, (pp) =>
            this.props.token.user_id == pp.user.id )
          } />
        } />

          </div>
        </Router>

   console.log("propsatroot", this.props);
  }
  else {
   return   <Router>
      <div>
        <Nav />
         <SignupForm /></div>
</Router>
}
}
};

let Tasktracker = connect((state) => state)(TaskTracker);


