import React, { Component } from "react";

function WithCount(Passval, initial = 0) {
  class Wrapp extends Component {
    constructor(prop) {
      super(prop);
      this.state = {
        count: initial,
      };
    }

    incrementCount =(()=>{
        this.setState({
            count: this.state.count+1   
        })
    })
    decrementCount = (()=>{
       
        this.setState({
            count: this.state.count-1 
        })
    })

    render() {
      return  <Passval
          count={this.state.count}
          incrementCount={this.incrementCount}
          decrementCount={this.decrementCount}
          {...this.props}
        />
      
    }
  }
  return Wrapp;
}

export default WithCount;
