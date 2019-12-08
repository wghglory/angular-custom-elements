import React, { Component } from 'react';

export class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'derek',
      password: ''
    };
  }

  login(e) {
    console.log(e);
    alert(e.target.username + ' is login...');
  }

  componentDidMount() {
    this.loginEl.addEventListener('login', this.login);
  }

  componentWillUnmount() {
    this.loginEl.removeEventListener('login', this.login);
  }

  render() {
    return (
      <div>
        <login-element
          ref={(ele) => (this.loginEl = ele)}
          username={this.state.username}
          login={(e) => this.login(e)}
        ></login-element>
      </div>
    );
  }
}
