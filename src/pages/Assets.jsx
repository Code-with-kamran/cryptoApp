import React from "react";
import {ArrowRight} from 'lucide-react'
import { Link } from "react-router-dom";

const Assets = () => {
  return (
    <div className="bg-[url('https://www.fastcoinen.com/h5/static/my/bg_signin_top.png')] bg-cover bg-center h-screen">
      <div className="w-1/1 flex flex-column justify-center text-white  py-3  rounded-lg ">
        <div>
          <div>Total assest ($)</div>

          <div className="  px-5"> 0.0000</div>
        </div>
      </div>
      <div className="w-1/1 flex  flex-column justify-evenly text-white    font-light  ">
        <div className="font-light pb-2 ">
          <div>
            <div>Total revenue ($)</div>

            <div className="  px-5"> 0.0000</div>
          </div>
        </div>
        <div className=" font-light pb-2 ">
          <div>
            <div>Total revenue ($)</div>

            <div className="  px-5"> 0.0000</div>
          </div>
        </div>
      </div>
      <div className="w-1/1 flex  flex-column justify-evenly text-gray-600 py-10 bg-white    font-light  ">
        <div>
          <img
            loading="lazy"
            src="https://www.fastcoinen.com/h5/static/my/ic_withdraw_coin.png"
          />
          <div>Recharge </div>
        </div>
        <div>
          <img
            loading="lazy"
            src="https://www.fastcoinen.com/h5/static/my/ic_withdraw_coin.png"
          />
          <div>Withdraw </div>
        </div>
        <div>
          <img
            loading="lazy"
            src="https://www.fastcoinen.com/h5/static/my/ic_withdraw_coin.png"
          />
          <div>Exchange </div>
        </div>
      </div>
      <div className="w-1/1 flex  flex-column justify-evenly text-gray-600 py-2 bg-white    font-light  ">
        <div>Recharge details </div>

        <div>Withdraw Detail</div>
      </div>
      <div className="w-1/1 flex  flex-column justify-evenly text-gray-600 py-2 bg-white  mt-2  font-light  ">
        <button className="focus:text-blue-500 ">Second Contract </button>

        <button className="focus:text-blue-500">Leverage</button>
        <button className="focus:text-blue-500">Fiat </button>

        <button className="focus:text-blue-500">Exchange</button>
      </div>

<div className="bg-white m-2 p-2">
      <div className=" flex">
        <div className="text-blue-500 font-bold flex-1" >USDT</div>
        <Link to="/secondcontract"><ArrowRight className="text-gray-400 mx-2" /></Link>
        
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
        <div className="text-blue-500 font-bold flex-1" >LINK</div>
        <ArrowRight className="text-gray-400 mx-2" />
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



    </div>
  );
};

export default Assets;

