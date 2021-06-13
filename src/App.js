import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GifCards from './GifCard';


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      gifs: [] ,
      found: false,
      // search: this.props.search
    }
  }

  render(){
    return <div> 
      <h2> giphy api app </h2>
     {/*  <GifCard info = {GifCards.info}>  */}


    </div>
  }
}