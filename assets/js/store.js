import { createStore, combineReducers } from 'redux';
import deepFreeze from 'deep-freeze';

function tasks(state = [], action) {
  return state;
}

function users(state = [], action) {
  return state;
}

let empty_form = {
  user_id: "",
  title: "",
  body: "",
  time_spent: "",
  token: "",
};



function tasks(state = [], action) {
  switch (action.type) {
  case 'TASKS_LIST':
    return [...action.tasks];
  case 'ADD_TASK':
    return [action.task, ...state];
  
  case 'MODIFY_TASK':
    let newstate = Object.assign({}, state);
      for (var i in newstate) {
     if (newstate[i].id == action.task.id) {
        newstate[i] = action.task;
        break; 
     }
}
    return newstate;
  default:
    return state;
  }
}


function update_task(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_TASK':
      return (state_to_action(state, action.data));
        
    default:
      return state;
  }
}

function state_to_action(state1,action1){
    var new_task = {};
    for (var i in state1) 
	{
	 new_task[i] = state1[i]; 
	}

    for (var i in action1) { 
	new_task[i] = action1[i]; 
	}
    return new_task;
}

function users(state = [], action) {
  switch (action.type) {
  case 'USERS_LIST':
    return [...action.users];
  default:
    return state;
  }
}

function form(state = empty_form, action) {
  switch (action.type) {
    case 'UPDATE_FORM':
      return Object.assign({}, state, action.data);
    case 'CLEAR_FORM':
return empty_form;
 case 'SET_TOKEN':
      return Object.assign({}, state, action.token);
 default:
      return state;
}
}


function token(state = null, action) {
  switch (action.type) {
    case 'SET_TOKEN':
      return action.token;
    default:
      return state;
  }
}

let empty_login = {
  name: "",
  pass: "",
};

function login(state = empty_login, action) {
  switch (action.type) {
    case 'UPDATE_LOGIN_FORM':
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}

let empty_register = {
  name: "",
  password_hash: "",
};

function signup(state = empty_register, action) {
  switch (action.type) {
    case 'UPDATE_SIGNUP_FORM':
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}

function root_reducer(state0, action) {
  
  // {posts, users, form} is ES6 shorthand for
  // {posts: posts, users: users, form: form}
  let reducer = combineReducers({tasks, users, form, token, login, signup,update_task});
  let state1 = reducer(state0, action);
  
  return deepFreeze(state1);
};

let store = createStore(root_reducer);
export default store;

