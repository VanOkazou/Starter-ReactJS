import React, { Component } from 'react';

class Searchbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: this.props.query
    }
  }

  componentDidMount() {
    this.searchbar.focus();
  }

  handleChange = e => {
    const input = e.target.value;
    this.setState({input});
    this.props.newSearch(input);
  }

  render(){
    return (
      <div>
        <input
          ref={input => this.searchbar = input}
          className="searchbar"
          value={this.state.input}
          onChange={e=>{this.handleChange(e)}}
          placeholder={this.state.input !== '' ? this.state.input : "Enter your search"}
        />
      </div>
    )
  }
}

export default Searchbar;
