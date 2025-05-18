import React from "react";

const news = [
  "Bitcoin hits $70,000 for the first time!",
  "Ethereum 2.0 staking surpasses 30M ETH.",
  "Solana launches new DeFi protocol.",
  "SEC delays decision on spot ETF approval.",
  "Binance to restrict services in some regions.",
  "Cardano announces Hydra Layer 2 upgrade.",
  "Polygon partners with major gaming studio.",
];

export default function News() {
  return (
    <div className="bg-white px-5 py-3">
    <div className="min-w-2xl  max-w-5xl h-6 overflow-hidden bg-[rgb(232,232,232)] rounded-full ">
      <i className="fa fa-volume-up text-[rgb(179,179,185)] px-2 font-sm" aria-hidden="true"></i>
        <div className="flex flex-col animate-scroll-vertical">
          {[...news, ...news].map((item, index) => (
            
            <div
              key={index}
              className="text-black text-xs py-2 px-8 font-light "
            >
              {item}
            </div>
          ))}
        </div>
      
    </div>
    </div>
  );
}
