import React, { Component } from 'react';
import 'tachyons';

import './App.css'

import SearchBox from '../components/SearchBox';
import CardList from '../components/cardList';
import Scroll from '../components/Scroll';
//import {robots} from './robots';  // { } if there's no default export 

// Virtual DOM collects this entire state - robots, searchfields - react passes them down as props down below functions?
class App extends Component {
  constructor() {
    super()     // calls the constructor of the component?
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  // originally onSearchChange(event) {...} will give typeerror: cannot read 'state' undefined
  // the value of this is not refering to the class App but inside the searchBox's input. And input don't have state.robots
  // Anytime you make own method, use function = () => {} arrow function to make sure this value is refering to class App
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render () {
    const { robots, searchfield } = this.state
    const filteredRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if (robots.length === 0) {
      return <h1 className='tc'>Loading</h1>
    } else {
    return (
      <div className="tc">
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={ filteredRobots }/>
        </Scroll>
      </div>
    );
    }
  }
}

export default App;
