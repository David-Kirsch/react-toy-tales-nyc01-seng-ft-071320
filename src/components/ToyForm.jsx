import React, { Component } from 'react';
import data from '../data'

class ToyForm extends Component {


  state = {
    name: "",
    image: ""

  }

  inputToy = (e) => {
    console.log(data.length+1)
    this.setState({
      [e.target.name]:  e.target.value
    })
  }

  addToy = (event) => {
    event.preventDefault();
    this.props.addToyHandler({id: data.length, name: this.state.name, image: this.state.image, likes: 0})
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.addToy}>
          <h3>Create a toy!</h3>
          <input type="text" onChange={this.inputToy} name="name" value={this.state.name} placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input type="text" onChange={this.inputToy} name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" /*onClick={this.addToy}*/ name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
