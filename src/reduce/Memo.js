import React, { useMemo,useState } from 'react';
import Counter from '../Hoc/Counter';




function Memo() {
    const [user, setuser] = useState(0)
const [count, setcountertwo]=useState(0)
const increment=()=>{
    setuser(user+1)
}
const decrement=()=>{
    setcountertwo(count+1)
}

 const iEven=useMemo(() =>{
    
let i=0
while(i<20000000){
    i++
}
return count%2===0
}, [count])

  return <div>
  <p>state---{user}</p>
  <button onClick={(()=>{
      increment()
  })}>increment</button>
<p>counter-{count}</p>
{iEven ? 'even':'odd'}
  <button onClick={(()=>{
    decrement()
})}>decrement</button>



  
  </div>;
}

export default Memo;
