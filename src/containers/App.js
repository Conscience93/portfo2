import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'tachyons';

import './App.css'

import ErrorBoundary from '../components/ErrorBoundary';
import SearchBox from '../components/SearchBox';
import CardList from '../components/cardList';
import Scroll from '../components/Scroll';

import { requestRobots, setSearchField } from '../actions';
import Header from '../components/Header';

// mapStateToProps - what state do I need to listen to
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

// mapDispatchToProps - what event should I listen to do I dispatch to reducer?
const mapDispatchToProps = (dispatch) => {  
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  // constructor() {
  //   super()   
  //   this.state = {
  //     robots: [],
  //     // searchField: ''
  //   }
  // } 

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users => { this.setState({ robots: users })});
    this.props.onRequestRobots();
  } 

  render () {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robots => {
    return robots.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
     <h1 className='tc'>Loading</h1> :
    (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={ filteredRobots }/>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
 }

export default connect(mapStateToProps, mapDispatchToProps)(App);
