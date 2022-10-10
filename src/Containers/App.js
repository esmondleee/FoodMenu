import React, { Component } from 'react';
import CardList from '../Components/CardList';
//import { robots } from './robots'; // import variable robots from ./robots //
import SearchBox from '../Components/searchBox';
import 'tachyons';
import './App.css';
import Scroll from '../Components/Scroll'
import ErrorBoundary from '../Components/ErrorBoundary';

class App extends Component {
  constructor() { //no argument so we dont need to pass in any arguement when using new App
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }

    console.log("Constructor");
  
  }
  
  componentDidMount() {
    //this.setState({ robots : robots }) // left : property right : variable name //
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots : users }))

    console.log("componentDidMount");
  }

  onSearchChange = (event) => { 
    //onSearchChange is an object under App// //always use arrow function to make sure this refers to the onSearchChange function//
    this.setState({searchfield: event.target.value}) //(1)
    

    //this.state.robots is an array//
    //robot (not robots) is element in the robots array, which is an object
    //
    // (2) everytime the onSearchChange function is called, make a variable that includes only those
    //    name that matches the searchfield.
  }

  render() {
    const { robots , searchfield } = this.state;
    const filteredRobots = robots.filter(robot => { 
      return robot.name.toLowerCase().includes(searchfield.toLowerCase()); //(2)//
    }) 

    console.log("render");
    //length = 0 implies robots has yet to be fetched from the server, and false//
    return (!robots.length) ?
    (<h1>Loading……</h1>) :
    (   
      <div className='tc'>
        <h1 className='f1'>Robots List</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
    
    //{} indicates whats inside is a variable //
  }
}


export default App;

//steps//
//1. App.js passes down the "onSearchChange" function to SearchBox.js //
//2. in SearchBox.js, coded such that everytime we enter something searchbox, the function
//   passed in will be changed. in that case the passed in function is onSearchChange from
//   App.js. 
//3. everytime the onSearchChange function in App.js is changed, the function will make changes
//   to the state of App.js. When the searchChange function in searchBox.js is called, 
//   the string in the searchfield is captured. (1)
//    
//4. App.js passes down the new state again to CardList.js
