import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SearchForm extends Component {
  state = {
    searchText: ""
  };

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let name = this.name.value;
    let path = `${name}`;

    this.props.history.push(`/${path}`);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          type="search"
          onChange={this.onSearchChange}
          name="search"
          ref={input => (this.name = input)}
          placeholder="Search..."
        />
        <button type="submit" id="submit" className="search-button">
          <i className="material-icons icn-search">search</i>
        </button>
      </form>
    );
  }
}

export default withRouter(SearchForm);
