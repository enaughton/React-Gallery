import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import SearchForm from "./Components/SearchForm";
import Gallery from "./Components/Gallery";
import Nav from "./Components/Nav";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="main-header">
            <h1 className="main-title">FLICKR API SEARCH</h1>
            <SearchForm />
            <Nav />
          </div>

          <div className="photo-container">
            <Switch>
              <Route path="/:query" component={Gallery} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
