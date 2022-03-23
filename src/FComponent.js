import {React,useContext} from 'react';
import {CounterContext} from './CounterContext';
function FComponent(){
   const{counter,setCounter}=useContext(CounterContext);
   return(
     <div>
       <h1>Functional component</h1>
        <h1>{counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>Increment</button>
        <button onClick={()=>setCounter(counter-1)}>Decrement</button>
        <hr></hr>
        <Fchild/>
        <hr></hr>
       </div>
   )
}
function Fchild(){
  const  {counter,setCounter}=useContext(CounterContext);
  return(
     <div>
       <h1>CHild component</h1>
       <h1>{counter}</h1>
       <button onClick={()=>setCounter(counter+1)}>Increment</button>
       <button onClick={()=>setCounter(counter+1)}>Decrement</button>
       </div>
  )
}
export default FComponent;
