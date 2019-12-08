import React, { Component } from 'react';

export class SearchComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  setMessage(message) {
    this.setState({ message });
  }

  closePopup() {
    alert('closing...');
  }

  componentDidMount() {
    this.popupEl.addEventListener('closed', this.closePopup);
  }

  componentWillUnmount() {
    this.popupEl.removeEventListener('closed', this.closePopup);
  }

  render() {
    return (
      <div style={{ margin: '2rem' }}>
        <input
          type="text"
          value={this.state.message}
          onChange={(e) => this.setMessage(e.target.value)}
        />
        <popup-element
          ref={(ele) => (this.popupEl = ele)}
          message={this.state.message}
          closed={() => this.closePopup()}
        ></popup-element>
      </div>
    );
  }
}
