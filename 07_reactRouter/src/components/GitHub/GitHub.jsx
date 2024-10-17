import React, { useEffect, useState } from 'react'
import useFetchAPI from '../../hooks/useFetchAPI'

function GitHub() {
    const d=useFetchAPI()
    console.log(`this is from git compo ${d}`);
    
  return (
    <div>
      GitHub Followers: {d?d.followers:'Content is loading'}<br/>
      <img src={d?d.avatar_url:"image is loading.."}></img>
    </div>
  )
}

export default GitHub