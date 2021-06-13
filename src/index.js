import React from 'react';
import ReactDOM from 'react-dom';
import SearchField from './SearchField';

//import App from './App';
class App extends React.Component{
  constructor() {
    super();

    this.state = {
        gifs: []
    }
}
  handleTermChange(term){
    console.log(term);
    
  }
  render(){
    return (
      <div >
       <SearchField onTermChange={this.handleTermChange}/>
       
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));