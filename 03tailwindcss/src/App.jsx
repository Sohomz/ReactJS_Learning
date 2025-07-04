import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import './index.css'

function App() {
  let newObj=[1,2,3];
  let newObj1={
    name:"Sohm",
    lastName:"Das",
    age:25
  };
  
  return (
    <>
      <div>
        <h1 className="bg-purple-900 border-4 border-purple-500 rounded">
          <div className="flex text-white justify-center">Tailwind CSS props check</div>
        </h1><br/>
      </div>
      <div className="flex justify-between">
        <Card anyName="sohom" anyObj={newObj} anyObj1={newObj1}></Card> {/* Here We are passing objects through props if you console.log then below will be output :
        
        {anyName: 'sohom', anyObj: Array(3), anyObj1: {…}}
        anyName:"sohom"
        anyObj:(3) [1, 2, 3]
        anyObj1:{name: 'Sohm', lastName: 'Das', age: 25}
        [[Prototype]]:Object
        */}
        <Card></Card>
        <Card anyName="Krishna"></Card>
      </div>
    </>
  )
}

export default App
//why className because class is a keyword in js, thats why using className
//I used Card as a component here
