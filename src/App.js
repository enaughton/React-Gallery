import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './index.css';
import SearchForm from './Components/SearchForm';
import Gallery from './Components/Gallery';
import Nav from './Components/Nav'
import apiKey from './config.js';

const key = apiKey

export default class App extends Component {

 
  
  constructor() {
    super();
    this.state = {

      images: [],
      searchText: ''
    }
  } 

  componentDidMount(){
   this.performSearch(this.state.query);
  }


  performSearch = (query) => {

    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          images: responseData.photos.photo })
      })
      .catch(error => {
        console.log('error fetching and parsing data', error)
      })


  }

  render() { 
    console.log(this.state.images)
    return (
      <BrowserRouter>   
      <div className="container">
        <div className="main-header">
          
            <h1 className="main-title">FLICKR API SEARCH</h1>
            <SearchForm />
            <Nav />  
          </div>   
          
        <div className="photo-container">
          <Gallery data={this.state.images} />
        </div>
      </div>
      


      <Switch>
      <Route path="/:name" render={() => this.performSearch(this.state.searchText)} />
      <Route path="/Cats" render={() => this.performSearch('cats')} />
      <Route path="/Dogs" render={() => this.performSearch('dog')}  />
      <Route path="/Computers" render={() => this.performSearch('computers')}/>
      </Switch>
      
          
      </BrowserRouter>
     
    );
  }
}
