import React, { useState } from 'react';

function Componet2() {
    const [user, setuser] = useState('chavan')
  return <div>
<h1>fuction parent name is --{user}</h1>
<button onClick={(()=>{
    setuser('ayush')
})}>fun</button>

<Componet4
updatenames={user}
childupdates={setuser}
/>
  </div>;
}




function Componet4(props) {
  return <div>
<h1>function children name--{props.updatenames}</h1>
<button onClick={(()=>{
props.childupdates('naveen')
})}>good</button>
  </div>;
}




export default Componet2;
