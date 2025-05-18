import React from 'react';
import Tradeview from '../components/Tradeview';

const Market = () => {
  return (
   <div className="">
    
    <div className="w-1/1 flex  flex-column justify-center bg-white text-black    font-bold border-b-2 pb-1">
      Center
      
     </div>
    <div className="w-1/1 flex  flex-column justify-evenly bg-white text-black    font-bold border-b-2 ">
      <button className='focus:text-blue-500 focus:border-b-4  focus:border-blue-500 text-gray-400 font-light pb-2 '>
        Optional
      </button>
      <button className='focus:text-blue-500 focus:border-b-4  focus:border-blue-500 text-gray-400 font-light pb-2 '>USDT</button>
      
     </div>
     <Tradeview />


   </div>
  );
}

export default Market;



