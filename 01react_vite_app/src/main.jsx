import React from 'react'
import ReactDOM from 'react-dom/client'
//_jsx.js is actually bable, like whenever we passing createElement, useEffect and all, 
//this bable is reponsible behind the scene how to pass.Behind the scene is actually js

import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// } // this is how we created custom react...but this will not work direct if 
//we call this in React project becaue syntax React is using thats somewhat diff, 
//there will be no type: etc

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
) //this is how we can do the same/achieve the same



const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherElement //evaluated Expression // why? because we cant add if else here, 
    //only the final output we can add here.If,we need if else, 
    //make all those things in any function and only final output pass here. 
    //This is an object right!! inside object do we write if else condn?
) //this is how react can accept a correct element

ReactDOM.createRoot(document.getElementById('root')).render(
 
    reactElement
  
)

