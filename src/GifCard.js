import React, { Component } from 'react';

class GifCard extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <img src= {this.props.info}/>
            </div>
        );
    }

}
export default GifCard;