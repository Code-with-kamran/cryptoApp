import React from 'react';
import {ArrowLeft} from "lucide-react"
import {useNavigate} from 'react-router-dom'

const SecondContract = () => {
    const navigate = useNavigate();
    const goback= ()=>{
        navigate(-1)
    }
  return (
   

    <>
    <div>
        <div className="flex mt-2">
            <ArrowLeft onClick={goback} className='w-1/12 '/>
            <div className='flex-1 flex justify-center '>Second Contract</div>
        </div>
      <div className="bg-white m-2 p-2 ">
      <div className=" flex">
        <div className="text-blue-500 font-bold flex-1" >LINK</div>
        
      </div>

       <div className="w-1/1 flex   justify-between text-gray-600  bg-white    font-light  ">
        <div className="font-light pb-2 ">
          <div>
            <div>Available ($)</div>

            <div className="  px-5"> 0.0000</div>
          </div>
        </div>
        <div className="font-light pb-2 ">
          <div>
            <div>Locking ($)</div>

            <div className="  px-5"> 0.0000</div>
          </div>
        </div>
        <div className="font-light pb-2 ">
          <div>
            <div>Estimate ($)</div>

            <div className="  px-5"> 0.0000</div>
          </div>
        </div>

        
      </div>
      </div>
      <div className="bg-white m-2 p-2 ">
      <div className=" flex">
        <div className=" font-bold flex-1" >
            Financial Record
        </div>
        
      </div>

       <div className="w-1/1 flex   justify-between text-gray-600  bg-white    font-light  ">
        <div className="font-light pb-2 ">
          Number
        </div>
        <div className="font-light pb-2 ">
          Record 
        </div>
        <div className="font-light pb-2 ">
         Time
        </div>

        
      </div>
      </div>



    </div>
    </>
  );
}

export default SecondContract;
