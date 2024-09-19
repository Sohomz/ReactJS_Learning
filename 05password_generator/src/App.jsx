import { useState, useCallback} from 'react'

import './index.css'

function App() {

  const [len,setLen]=useState(8);
  const [numberAllow,setNumberAllow]=useState(false);
  const [chrAllow,setChrAllow]=useState(false);
  const [pwd,setPwd]=useState('');

  const pwdGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllow){
      str+="0123456789"
    }
    if (chrAllow){
      str+="@#${}[]*()"
    }

    for (let index = 0; index < array.length; index++) {
      let c=Math.floor(Math.random()*str.length+1);
      pass=str.charAt(c);
    }
    setPass(pass)
  },[len,numberAllow,chrAllow]); 
  // useCallback is a React Hook that lets you cache a function definition between re-renders. reason to use useCallback is to prevent a component from re-rendering unless its props have changed. This is because of something called "referential equality".Every time a component re-renders, its functions get recreated. Because of this, the addTodo function has actually changed. Here, when only the len, numberAloow, chrAllow minimum anyone of it will change then only function will re-render. By this we can achieve to call same  func pwdGenerator whenever there is a chnge in its props/dependencies

  
  return (
    <>
      <h1 className='flex justify-center text-4xl'>Password generator</h1>
    </>
  )
}

export default App
