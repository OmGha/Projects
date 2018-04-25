import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import  'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Router from './router';
import {createStore} from 'redux';
import {Provider} from "react-redux";





const initialState = {
  
             loged: false
  }

console.log(initialState);



function reducer(state = initialState , action){
    console.log(action);
    switch(action.type){
        case "LOGED": 
            return {
                 loged: true,
               
            };
        case "LOGOUT": 
            return {
                 loged: false,
               
            };
            default:
              return state;
    }

}

const store = createStore(reducer);



const unsubscribe = store.subscribe(() =>
{
    console.log("======================");
    
    console.log(store.getState().loged)
    var logedState = store.getState().loged;

    localStorage.setItem('loged', logedState);

    console.log(localStorage.getItem('loged'));
    

}
    
)


var getlogstare = localStorage.getItem("loged");

console.log(getlogstare);

if(getlogstare){
    store.dispatch({type: "LOGED"});
}


const Getly = () => (
    <Provider store={store} >
         <Router />
    </Provider>
);

ReactDOM.render( <Getly /> , document.getElementById('root'));
registerServiceWorker();
