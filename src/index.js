import React from 'react';
import ReactDOM from 'react-dom';
import SearchField from './SearchField';
import GifCard from './GifCard';
const apiKey = '7gQiahHXIrO2CcBEcaP2RQCYAVcM8pvX';

//import App from './App';
class App extends React.Component{
  constructor() {
    super();

    this.state = {
        gifs: [] ,
        found: false
    }
}
  handleTermChange = (input) => {
    console.log(input);
    fetch('http://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=' + apiKey )
    
    // SEARCH+TERM+GOES+HERE&api_key=YOUR_API_KEY
      .then(response => response.json())
      .then(data => {
        this.setState({gifs:data.data, found: true})
        console.log(this.state.gifs);
       // console.log(gifs);

      })
      .catch(error => {
        this.setState({found: false})
       console.log("error: ")
     });
  }
  render(){
    let foundcards = []
    if(this.state.found){
       foundcards = this.state.gifs.map((i) => <GifCard gif={i.images.original.url}/>)
    } else{
      foundcards = <h2> no found results</h2>
    }

    return (
      <div >
       <SearchField onTermChange={this.handleTermChange}/> 
       {foundcards} 
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));