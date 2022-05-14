import React, { useReducer } from 'react';


const initialState={
    count:0
}

const reducer=((state,action)=>{
const stateCopy={...state}
switch(action.type){
    case 'increment':
       stateCopy.count=stateCopy.count+action.payload
        return stateCopy

        case 'decrement':
            stateCopy.count=stateCopy.count-action.payload
            return stateCopy

        case 'reset':
        return initialState
        default:return state
    }    
})

function ComponetF() {
    
const [state, dispatch] = useReducer(reducer, initialState)

  return <div>
  <p>state---{state.count}</p>
  <button onClick={(()=>{
      dispatch({
          type:'increment',
          payload:20
      })
  })}>increment</button>

  <button onClick={(()=>{
    dispatch({
        type:'decrement',
        payload:20
    })
})}>decrement</button>

<button onClick={(()=>{
    dispatch({
        type:'reset'
        
    })
})}>reset</button>

  
  </div>;
}

export default ComponetF;
