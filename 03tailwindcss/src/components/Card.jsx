import { useState } from 'react'

function Card({anyName="dafault Value giving"}) { //We can pass props, anyway by default its passing. Why we need this because to communicate between components, alternative syntax for function Card(props) -> function Card({anyName}), now by default I am giving a name because if someone is not setting up the anyName value, then by default there will b a value
  //console.log(props); // We can use the objects passed from APP componeent here to change card name/something
  
  return (
    <>
        <div className="max-w-sm px-8 rounded overflow-hidden shadow-lg">
        <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{anyName}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
        </div>
    </>
  )
}

export default Card;