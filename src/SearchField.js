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
            <input onChange={event => this.onInputChange(event.target.value)}/>
            
            </div>
        )
    }

}

export default SearchField;