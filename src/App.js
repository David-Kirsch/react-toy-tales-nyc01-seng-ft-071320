import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  addToyHandler = (toyObj,e ) => {
    let newToysArray = [toyObj, ...this.state.toys]
    this.setState({
      toys: newToysArray
    })

  }



  state = {
    display: false,
    toys: data
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }




  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToyHandler={this.addToyHandler}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer data={this.state.toys}/>
      </>
    );
  }

}

export default App;
