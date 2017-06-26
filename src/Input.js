import React, { Component } from 'react';
class Input extends Component {
 
 userNameChange(){
     let value = this.refs.inputName.value;
    this.props.inputChange(value)
 }
  render() {
    return (
      <div>
           用户名：<input name="name" ref="inputName" onChange={this.userNameChange.bind(this)}/> <br/>
           密码:<input name="password" type="password"/>
      </div>
    );
  }
}
export default Input;