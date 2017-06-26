import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input';
import LoginButton from './LoginButton';
import DisplayWlc from './DisplayWlc';

class App extends Component {

 
//constructor () {
     //   super()

    //    this.state = {
    //        name: '123'
     //   }
   // }
  login(){
    this.setState({name:this.inputName});
  }
  inputChange(value)
  {
    this.inputName=value;
  }
  componentWillMount() {
    this.setState({
        name: "JY"
    })
}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>Please input your login info</div>
        <Input inputChange={this.inputChange.bind(this)}/>
        <LoginButton click={this.login.bind(this)}/>
        <DisplayWlc name={this.state.name}/>
      </div>
    );
  }
}

export default App;
