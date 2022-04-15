import './App.css';
import React, { Component } from 'react';
import Subject from './Components/Subject'
import Header from './Components/Header'
import Content from './Components/Content';



class App extends Component {
constructor(props){
super(props);
this.state = {
  mode:'welcome',
  Content:{title:'React is', desc:'A JavaScript library for building user interfaces'},
  welcome:{title:'Welcome',desc:'this is dynamic React'},
  Subject:[
  {id:'1', title:'HTML', desc:'This is HTML'},
  {id:'2', title:'CSS', desc:'This is CSS'},
  {id:'3', title:'Javascript', desc:'This is Javascript'},
  {id:'4', title:'React', desc:'This is React'},
  ]
}
}

  render(){
    var _desc, _title = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else{
      _title = this.state.Content.title;
      _desc = this.state.Content.desc; 
    }
    return (
      <div className="App">
        <Header></Header>
        {/*
        <Content
          content={_title}
          desc={_desc}>
        </Content>
        */}
       <div className='content'>
          <h1><a href="/" onClick={function(e){
            console.log(e);
             if(this.state.mode === 'welcome'){
              this.setState({
                mode:'test'
              })
             }else{
              this.setState({
                mode:'welcome'
              })
             }
             
             e.preventDefault();
          }.bind(this)}>{_title}</a></h1>
          {_desc}
        </div>
        <Subject data={this.state.Subject}></Subject>
      </div>
    );
  }
}

export default App;
