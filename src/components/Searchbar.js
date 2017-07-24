import React, { Component } from 'react';

class Searchbar extends Component {

  state = {
    input: ''
  }

  onInputChange = e => {
    const input = e.target.value;
    this.setState({input});
  }

  render(){
    return (
      <input
        value={this.state.input}
        onChange={e=>{this.onInputChange(e)}}
      />
    )
  }
}

export default Searchbar;
