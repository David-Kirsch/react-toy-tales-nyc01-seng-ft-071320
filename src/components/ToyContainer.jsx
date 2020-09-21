import React from 'react';
import ToyCard from './ToyCard'
import data from '../data'


class ToyContainer extends React.Component{


  getToys = () => {
  return this.props.data.map(toy => <ToyCard key={toy.id} toy={toy} />)
  }


  render(){
  return(
    <div id="toy-collection">
      {this.getToys()}
    </div>
  );
  }
}

export default ToyContainer;
