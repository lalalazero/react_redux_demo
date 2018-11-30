import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';

const reducer = (state, action) => {
  if(state === undefined){
      return 0;
  }else{
      if(action.type === 'add'){
          let newState = state + action.payload;
          return newState;
      }
      return state;

  }
}
const store = createStore(reducer)

function add1() {
    store.dispatch({type: 'add', payload: 1})
}
function minus1() {
    store.dispatch({type: 'add', payload: -1})
}

function addIfOdd() {
    let old = store.getState()
    if(old % 2 === 1){
        store.dispatch({type: 'add', payload: 1})
    }
}

function addAsync() {
    setTimeout(()=>{
        store.dispatch({type: 'add', payload: 1})
    },2000)
}

function render(){
    ReactDOM.render(<App
            value={store.getState()}
            onAdd1={()=>add1()}
            onMinus1={()=>minus1()}
            onAddIfOdd={()=>addIfOdd()}
            onAddAsync={()=>addAsync()}
            />,
        document.getElementById('root'));
}

render()
store.subscribe(render)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
