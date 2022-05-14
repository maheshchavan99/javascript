import React, { useState } from 'react';

function CountOne() {
    // const [counter, setcounter] = useState(['kohli','maxi','siraj'])
    const [counter, setcounter] = useState('siraj')

  return <div>
  
  {counter.map((post)=>{
      return <p>{post}</p>
  })}
  </div>;
}
export default CountOne;
