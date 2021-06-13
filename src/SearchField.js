import React, { Component } from 'react';

class SearchField extends Component{
    constructor(){
        super();
        this.state = {term: ''}
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }

    render(){
        return(
            <div className ="searchField" > 
            <input id= "submitId" placeholder="Search for gifs!" onChange={event => this.onInputChange(event.target.value)}/>
            <button onClick= {this.handleFormChanges}> Search </button>

            </div>
        )
    }

}

export default SearchField;