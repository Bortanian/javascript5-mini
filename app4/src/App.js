import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
      .then(res => {
        this.setState({
          cars: res.data
        })
      })
  }

  render() {
    let carList = this.state.cars.map(car => {
      return (
        <div>
          <p>Year: {car.year}</p>
          <p>Make: {car.make}</p>
          <p>Model: {car.model}</p>
          <p>Color: {car.color}</p>
        </div>
      )
    })
    return (
      <div className="App">
        <button onClick={() => this.getCars()}>Get cars</button>
        {carList}
      </div>
    );
  }
}

export default App;
