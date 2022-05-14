import React, { Component } from 'react';

 class Component1 extends Component {
     constructor(props){
         super(props)
         this.state={
             username:'mahesh'
         }
         
     }

     updatename=(val)=>{
         this.setState({
             username:val
         })
     }
  render() {
    return (<div>
    <h1>my name is -----{this.state.username}</h1>
    <button onClick={(()=>{
       this.updatename('praveen')
    })}>updatename</button>
    <Component3
    names={this.state.username}
    updaten={this.updatename}
    />
    </div>
    );
  }
}



 class Component3 extends Component {
  render() {
    return <div>
    <h1> child name---{this.props.names}</h1>
    <button onClick={(()=>{
        this.props.updaten('harsh')
    })}>child to parent</button>
    </div>;
  }
}




export default Component1;
