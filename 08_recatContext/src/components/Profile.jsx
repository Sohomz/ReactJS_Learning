import React,{useContext} from 'react'
import userContext from '../context/userContext';


function Profile() {
    const {user}=useContext(userContext)
    if (!user) return <div>Plz login</div>

    return <div className='text-white'>Welcome {user.userName}</div>
}

export default Profile;