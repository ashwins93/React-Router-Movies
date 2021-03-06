import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    if (this.state.savedList.some(savedMovie => savedMovie.id === movie.id))
      return;
    const savedList = this.state.savedList.slice();
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <Router>
        <div>
          <SavedList list={this.state.savedList} />
          <Route exact path="/" component={MovieList} />
          <Route
            exact
            path="/movies/:id"
            render={props => (
              <Movie {...props} addToSavedList={this.addToSavedList} />
            )}
          />
        </div>
      </Router>
    );
  }
}
