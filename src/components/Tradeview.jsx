import React from "react";

const dummyData = [
  { symbol: "SNT/USDT", price: "0.02893", change: "+4.92%" },
  { symbol: "XRP/USDT", price: "2.36079", change: "+1.17%" },
  { symbol: "EOS/USDT", price: "0.80350", change: "+1.03%" },
  { symbol: "ELA/USDT", price: "1.32420", change: "-0.86%" },
  { symbol: "BCH/USDT", price: "392.23000", change: "+0.46%" },
  { symbol: "BTC/USDT", price: "103225.00000", change: "+0.28%" },
];

const Tradeview = () => {
  return (
    <div className="overflow-x-auto w-full p-4 bg-white rounded-md shadow">
      <h2 className="text-lg font-semibold mb-3">Increase list</h2>
      <table className="min-w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-500 text-sm border-b">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2 mx-auto">Last Price</th>
            <th className="px-4 py-2 float-end">UpDowns</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((coin, idx) => {
            const [base, quote] = coin.symbol.split("/");
            return (
              <tr
                key={idx}
                className="border-b last:border-b-0 hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3 font-semibold">
                  <span className="font-bold">{base}</span>/
                  <span className="text-gray-600">{quote}</span>
                </td>
                <td className="px-4 py-3 font-medium">{coin.price}</td>
                
                  {parseFloat(coin.change) >= 0 ? 
  <td className="px-4 py-3">
    <span className="bg-green-500 text-white text-sm px-3 py-1 float-end rounded-md">
      {coin.change}
    </span>
  </td>
  :
  <td className="px-4 py-3">
    <span className="bg-red-500 text-white text-sm px-3 py-1 float-end rounded-md">
      {coin.change}
    </span>
  </td>
}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Tradeview;
