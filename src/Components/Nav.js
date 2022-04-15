import React, { Component } from 'react';

class Nav extends Component {
    render(){
      return(
        <nav>
          <ul>
            <li><a href={this.props.href1}>{this.props.href1}</a></li>
            <li><a href={this.props.href2}>{this.props.href2}</a></li>
          </ul>
        </nav>
      );
    }
  }
  
  export default Nav;