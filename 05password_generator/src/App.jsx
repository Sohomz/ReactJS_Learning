import { useState, useCallback, useEffect} from 'react'

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
      str+="A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z6a7b8c9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8w9x0y1z2"
    }
    if (chrAllow){
      str+="ABC)%*^!<>?DEF@#$GHIJ)%*^!<>?KLMNOP@#$[]QRST)%*^!<>?${}[]YZa)%*^!<>?bcde@#${}[]fgh[]*()%*^!<>?ijklmn[]*()%*^!<>?opqrs[]*()%*^!<>?tuv[]*()%*^!<>?wxyz"
    }

    for (let index = 0; index < len; index++) {
      let c=Math.floor((Math.random()*str.length)+1);
      pass+=str.charAt(c);
    }
    setPwd(pass)
  },[len,numberAllow,chrAllow]); 
  // useCallback is a React Hook that lets you cache a function definition between re-renders. reason to use useCallback is to prevent a component from re-rendering unless its props have changed. This is because of something called "referential equality".Every time a component re-renders, its functions get recreated. Because of this, the addTodo function has actually changed. Here, when only the len, numberAloow, chrAllow minimum anyone of it will change then only function will re-render. By this we can achieve to call same  func pwdGenerator whenever there is a chnge in its props/dependencies

  // pwdGenerator(), cant call this here because we dont have the control, err will come too many re-renders, this is not because of useCallback, even if u delete it, it will give same err. Use button, onClick this function no issue. Else useEffect

  useEffect(()=>{
    pwdGenerator()
  },[len,numberAllow,chrAllow])
  
  return (
    <>
      <h1 className='flex justify-center text-4xl'>Password generator</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-6 my-8  text-orange-500 bg-gray-800">

        <div className="flex shadow-rounded-lg overflow-hidden mb-4 font-bold">
          <input type="text" value={pwd} className="outline-none w-full py-2 px-3 rounded-lg items-center" placeholder='password here' readOnly></input>
          <button className="p-2 text-white justify-center bg-blue-700 rounded-md m-4">Copy</button>
        </div>
        <div className="flex items-center gap-x-1">
          <input type='range' min={6} max={20} value={len} className="cursor-pointer" onChange={(e)=> {setLen(e.target.value)}}></input>
          <label>Length: {len}</label>
        </div>
        <div className="flex items-center gap-x-1">
        <input type="checkbox" className="cursor-pointer" onChange={(e1)=> {setNumberAllow(prevState=>(!prevState))}}></input>
          {/* Here we are setting the prevState varible as checkbox tick in/out */}
          <label >Number Allowance {numberAllow}</label>      
        </div>
        <div className="flex items-center gap-x-1">
        <input type="checkbox" className="cursor-pointer bg-cyan-700" onChange={(e2)=> {setChrAllow(prevState=>(!prevState))}}></input>
          {/* Here we are setting the prevState varible as checkbox tick in/out */}
          <label >Special Character Allowance {chrAllow}</label>      
        </div>
      </div>
    </>
  )
}

export default App
