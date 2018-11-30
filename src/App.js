import React, { Component } from 'react';
import './App.css'
class App extends Component {

    add1(){
        this.props.onAdd1();
    }
    minus1(){
        this.props.onMinus1();
    }
    addIfOdd(){
        this.props.onAddIfOdd();
    }
    addSync(){
        this.props.onAddAsync();
    }
  render() {
    return (
      <div>
        <p>你点击了{this.props.value}次</p>
        <button id='add1' className='button' onClick={this.add1.bind(this)}>加1</button>
        <button id="minus1" className='button' onClick={this.minus1.bind(this)}>减1</button>
        <button id="addIfOdd" className='button' onClick={this.addIfOdd.bind(this)}>如果是单数加1</button>
        <button id="addAsync" className='button' onClick={this.addSync.bind(this)}>两秒后加1</button>
      </div>
    );
  }
}

export default App;
