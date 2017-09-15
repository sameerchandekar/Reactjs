import {combineReducers} from 'redux';
//import UserReducer from './reducer-users';
import message from './message-prime';
import logout from './logout'

const allReducers = combineReducers({
     message : message ,
     logout : logout
});

export default allReducers;
 // the new syntacx to create a custom objec t having properties of previous object with one property modified
 // const toggele = (todo) => {
 // return Object.assign({} , todo , {completed : !completed});
 // };
//
//
 // const toggele = (todo) => {
 // return { ...todo , {completed : !completed});
 // };
