import React, { Component } from 'react';

export class ComponentA extends Component {
    constructor(props){
        console.log('constructor will ve executed');
        super(props)
        this.state={
            username:'mahesh'
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps will be executed');
        return null
    }


  render() {
      console.log('render method executed');
    return <div>
    <h1>mount phase--{this.state.username}</h1>
    </div>;
  }
  componentDidMount() {
    console.log('component Did Mount will be executed');
  }
  
}

export default ComponentA;
