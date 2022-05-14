import React, { Component } from "react";

export class ComponentB extends Component {
  constructor(props) {
    console.log("constructor will ve executed");
    super(props);
    this.state = {
      username: "mahesh",
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps will be executed");
    return null;
  }
  shouldComponentUpdate() {
    console.log("shouldComponentupdate ");
  }

  render() {
    console.log("render method executed");
    return (
      <div>
        <h1>mount phase--{this.state.username}</h1>
      </div>
    );
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    
  }

  componentDidMount() {
    console.log("component Did Mount will be executed");
  }
}

export default ComponentB;
