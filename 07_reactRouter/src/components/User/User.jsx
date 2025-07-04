import React from 'react'
import { useParams } from 'react-router-dom';

function User() {
    const {userId}=useParams()
  return (
    <div className="bg-gray-800 p-5 w-full shadow-sm rounded-md text-white m-5">User: {userId}</div>
  )
}

export default User;