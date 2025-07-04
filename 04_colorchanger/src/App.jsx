import './index.css';
import { useState } from 'react';
import React from 'react';

function App() {
  const [bgColor, setBgColor] = useState('Black');

  // onClick always want function, but not the return of a function, thats why we have to pass a function, else callback ()=>

  return (
       <div className="flex h-screen w-full" style={{backgroundColor: `${bgColor}`}}>
          {/*Passing bgColor vaiable here so that the color can be changed, we had to use h-screen to take the full height, also we need to pass raw colors, not the bg-green-500 etc, this will not work in js*/}
        <div className="fixed bottom-0 w-full flex justify-center">
          <button onClick={() => setBgColor('red')} className="flex bg-red-500 text-white px-4 py-2 rounded cursor-pointer">Red</button>
          <button onClick={() => setBgColor('green')} className="flex bg-green-500 text-white px-4 py-2 rounded">Green</button>
          <button onClick={() => setBgColor('blue')} className="flex bg-blue-500 text-white px-4 py-2 rounded">Blue</button>
          <button onClick={() => setBgColor('white')} className="flex bg-white text-black px-4 py-2 rounded border-black">White</button>
          <button onClick={() => setBgColor('#313131')} className="flex bg-zinc-800 text-white px-4 py-2 rounded">Dark</button>
        </div>
      </div>
  );
}

export default App;
