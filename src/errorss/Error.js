import React, { Component } from 'react';
import Fallback from './Fallback';

class Error extends Component {

// constructor(props){
//     super(props)
//     this.state={
//         hasErr:false
//     }
// }

state={
        hasErr:false
}

static getDerivedStateFromError(nextProps, prevState) {
    return {
        hasErr:true
    }
}

componentDidCatch(error, info) {
    console.log('componenrt did Catch');
    console.log(error);
    console.log(info);
}

  render() {
      if (this.state.hasErr) {
          return <div>
              <Fallback/>
          </div>
        } else {
            return this.props.children
        }
  }
}

export default Error;
