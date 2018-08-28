import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
  }

  render() {
    return <input onChange={event => console.log(event.target.value)} />;
  }

  // This is some kind of method declaration using a somewhat lambda expression
  //<input onChange={(event) => console.log(event.target.value) } /> or you could use
  //<input onChange={event => console.log(event.target.value)} />;
  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
