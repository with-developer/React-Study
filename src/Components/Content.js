import React, { Component } from 'react';

class Content extends Component {
    render(){
      return(
        <div className='content'>
          <h1>{this.props.content}</h1>
          {this.props.desc}
        </div>
      );
    }
  }
  
  export default Content;