import React from "react";
import {ArrowRight, BadgeCheck,ShieldCheck,ListCheck,WalletIcon,LucideShare,Headphones, Share} from 'lucide-react'
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className=" mb-60 bg-[url('https://www.fastcoinen.com/h5/static/my/bg_signin_top.png')] bg-cover bg-center h-screen">
      <div className="w-1/1 flex  justify-center text-white  py-3  rounded-lg ">
        <div className="flex flex-col   ">
            <img
            src="https://media.istockphoto.com/id/1299615596/vector/futuristic-golden-bitcoin-digital-currency-computer-circuit-board-cryptocurrency-mining-sci.jpg?s=612x612&w=0&k=20&c=fWGGI_UvdtMa-AtSbhP5CtYzzNwnGydJzr0bx47kxDU=" // Replace with your logo URL
            alt="FASTCOIN Logo"
            className="  h-10 rounded-full w-auto my-3 md:w-20 md:h-20 self-center"
          />
          <div className="self-center">Vip 0 ($)</div>

          <div className="  self-center"> ID: 108666</div>
          <div className="  self-center"> Huzaim@gmail.com</div>
          <div className="  font-extralight  self-center"> Credit score: 100</div>
        </div>
      </div>
      
     <div className="bg-white p-4 m-4 rounded-2xl">
        <div className="flex border-b border-gray-300 py-4">
            <div className="content flex flex-1"><BadgeCheck className="mr-4 text-green-500"/>Primary Certificate</div>
            
                <Link to="/certificate " className="flex"> De Certificate
            <ArrowRight /></Link>
               
           
        </div>
        <div className="flex  border-b border-gray-300  py-4">
             <div className="content flex flex-1"><ShieldCheck className="mr-4 text-pink-500"/>Advance Identification</div>
            
                <Link to="/identification" className="flex">De Certificate
            <ArrowRight /></Link>
                
          
        </div>
        <div className="flex  border-b border-gray-300  py-4">
             <div className="content flex flex-1"><ListCheck className="mr-4 text-green-500"/>Account Change Record</div>
            
                <Link to="/changerecord" className="flex">
            <ArrowRight /></Link>
                
          
        </div>
        <div className="flex  border-b border-gray-300  py-4">
             <div className="content flex flex-1"><ListCheck className="mr-4 text-brown-500"/>Rapid Position</div>
            
                <Link to="/rapidposition" className="flex">
            <ArrowRight /></Link>
                
          
        </div>
        <div className="flex  border-b border-gray-300  py-4">
             <div className="content flex flex-1"><ListCheck className="mr-4 text-brown-500"/>
             Contract Position</div>
            
                <Link to="/contractposition" className="flex">
            <ArrowRight /></Link>
                
          
        </div>


        <div className="flex  border-b border-gray-300  py-4">
             <div className="content flex flex-1"><WalletIcon className="mr-4 text-yellow-800"/>
             Wallet address</div>
            
                <Link to="/wallet" className="flex">
            <ArrowRight /></Link>
                
          
        </div>
        <div className="flex  border-b border-gray-300  py-4">
             <div className="content flex flex-1"><Share className="mr-4 text-yellow-800"/>
             I want to Share</div>
            
                <Link to="/share" className="flex">
            <ArrowRight /></Link>
                
          
        </div>
        <div className="flex  border-b border-gray-300  py-4">
             <div className="content flex flex-1"><Headphones className="mr-4 text-pink-800"/>
             Online customer Service</div>
            
                <Link to="/customerservices" className="flex">
            <ArrowRight /></Link>
                
          
        </div>
        
     </div>





    </div>
  );
};

export default Profile;

