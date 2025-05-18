import React from "react";

const coins = [
  {
    symbol: "BTC/USDT",
    price: "102949.01000",
    change: "+0.01%",
    isUp: true,
  },
  {
    symbol: "ETH/USDT",
    price: "2458.98000",
    change: "-0.60%",
    isUp: false,
  },
  {
    symbol: "XRP/USDT",
    price: "2.33014",
    change: "-0.14%",
    isUp: false,
  },
  // Add more coins as needed
];

export default function Price() {
  return (
    <div className="w-4xl overflow-x-auto">
      <div className="flex flex-nowrap justify-between gap-4 p-4  bg-[rgb(232,232,232)]">
        {coins.map((coin, idx) => (
          <div
            key={idx}
            className=" w-4/12 bg-white rounded shadow-md py-4 text-center "
          >
            <div className="text-black font-bold">
              {coin.symbol.split("/")[0]}
              <span className="text-gray-500 text-sm font-normal">
                /{coin.symbol.split("/")[1]}
              </span>
            </div>
            <div
              className={`text-sm sm:text-2xl font-semibold ${
                coin.isUp ? "text-green-500" : "text-red-500"
              }`}
            >
              {coin.price}
            </div>
            <div
              className={`text-sm ${
                coin.isUp ? "text-green-500" : "text-red-500"
              }`}
            >
              {coin.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
