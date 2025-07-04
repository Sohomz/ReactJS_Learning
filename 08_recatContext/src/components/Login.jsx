import React , {useState,useContext} from 'react';
import userContext from '../context/userContext';

function Login() {
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");

    const {setUser}=useContext(userContext);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({userName,password});
    }
  return (
    <div>
        <h2>Login</h2>
        <input className='flex' type='text' placeholder='Type name here' value={userName} onChange={(e)=>setUserName(e.target.value)}></input> <br></br>
        <input type="password" placeholder='Type password here' value={password} onChange={(e)=>setPassword(e.target.value)}></input><br></br>
        <button className='text-white' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login;