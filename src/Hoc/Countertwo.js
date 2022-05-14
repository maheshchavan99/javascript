import React, { Component } from 'react';
import WithCount from './ComponentG';
// import ComponentM from './ComponentG';

class Countertwo extends Component {
  render() {
      const {count,incrementCount,decrementCount}=this.props
    return <div>
    <p>couter at two ===={count}</p>
    <button onClick={incrementCount}>+</button>
    <button onClick={decrementCount}>-</button>
    </div>;
  }
}

export default WithCount(Countertwo);
