import React from 'react';
import {ArrowLeft} from 'lucide-react'
import { useNavigate } from 'react-router-dom';


const LanguageSwitch = () => {
    const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // This goes back one page in history
  };
    

  return (
    <div>



      <div className="w-1/1 flex  flex-column justify-center  py-3  rounded-lg ">
      <ArrowLeft onClick={goBack} className='absolute top-3 left-3'/>Switch Lines
      
      </div>
      <div className="w-1/1 flex  border border-gray-300 bg-gray-900 text-white flex-column justify-center  py-3 mx-4 rounded-lg mt-2">
      SwitchLInes678
      
      </div>
      
    </div>
  );
}

export default LanguageSwitch;
