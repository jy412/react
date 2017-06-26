import React, {Component} from 'react';
class LoginButton extends Component {

    render(){

        return (
            <button onClick={this.props.click}>login</button>
        );
    }
}
export default LoginButton;