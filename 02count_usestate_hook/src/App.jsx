import { useState } from 'react' //useState is a function
import './App.css'


//Main qs why we are using useState, we can do the same thing in js also
//in js Document.getElementbyID.innerHTML=value will display the value
//but suppose there are 100 elements where we need to reflect the value
//100 times we need to write Document.getElementByID or byClass one time and give the class name to ecah element
//now react is telling, useState will do the job for you whenever the value/state of that variable will change

function App() {
  let [count, setCount] = useState(15) //changing const to let because count is changing
  //useState(<use any value here as argument, string, number, empty string- basically a default value'>)
  //useState returns 2 values <count- updated value, function>, the funcname can be anything
  //setCount is used as name because this func is setting the count thats all


  const increamentCount=()=>{
    //setCount(count+1); // for interview

    //if interviewer update the code like this, what will happen, by eye, you can say if the value is 15, then it will be adding 6 times that means 21.
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
    //But this is not the case. Because when fiber going to take this things, he will take these as batch and then he will understand ohh all are same, then output will be 15+1=16 only. But if we want to acheive that then we need to use prevCounter or any varible name doesn't matter

    setCount(prevCounter=>prevCounter+1);
    setCount(prevCounter=>prevCounter+1);
    setCount(prevCounter=>prevCounter+1);
    setCount(prevCounter=>prevCounter+1);
    setCount(prevCounter=>prevCounter+1);
    setCount(prevCounter=>prevCounter+1); //now 15+7=23, why because setCount is actually a callback function, it will do count=count+1 then prevcounter+1

  }

  const decreamentCount=()=>{
    count=count-1;
    setCount(count);
  }

  return (
    <>
      <h1>UseState using Hooks</h1>
      <button style={{backgroundColor:"blue",color:"#fff"}} onClick={increamentCount}>Add {count}</button> 
      <br></br>
      <button onClick={decreamentCount}>Reduce {count}</button>
    </>
  )
}
//${count} is not needed, behind the scene bable is doing that
// in button onClickthesyntax is topassafunction i.e. onClick=increamentCount(), 
//Also I dont wnat toexecute the function right away when brower will open
//but this is not html, 
//its jsx. so we need to pass the value{}

export default App
