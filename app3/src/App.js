import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      badMovies: ['Battlerield Earth', 'Catwoman', 'The Last Airbender']
    }
  }

  render() {

    let List = this.state.badMovies.map( (movie, i) => {
        return (
        <Movie movie={movie} />
        )
    })

    return (
      <div className="App">
        <h1>Terrible Movies List:</h1>
        {List}
      </div>
    );
  }
}

export default App;
