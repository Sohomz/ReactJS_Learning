import './index.css';
import { useState } from 'react';
import React from 'react';

function App() {
  const [bgColor, setBgColor] = useState('');

  const colorChange = (clr) => {
    setBgColor(clr);
    document.body.className = clr;
  };

  return (
    <>
      <div className={`fixed bottom-0 w-full flex justify-center p-4 space-x-6 ${bgColor}`}>
        <button onClick={() => colorChange('bg-red-500')} className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer">Red</button>
        <button onClick={() => colorChange('bg-green-500')} className="bg-green-500 text-white px-4 py-2 rounded">Green</button>
        <button onClick={() => colorChange('bg-blue-500')} className="bg-blue-500 text-white px-4 py-2 rounded">Blue</button>
        <button onClick={() => colorChange('bg-white')} className="bg-white text-black px-4 py-2 rounded border-black">White</button>
        <button onClick={() => colorChange('bg-zinc-900')} className="bg-zinc-900 text-white px-4 py-2 rounded">Dark</button>
      </div>
    </>
  );
}

export default App;
