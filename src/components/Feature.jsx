import React from "react";
import {
  Languages,
  Headphones,
  Newspaper,
  HelpCircle,
  Wallet,
  DollarSign,
  ArrowDownCircle,
  Share2,
} from "lucide-react";

const features = [
  { title: "Language switching", icon: Languages },
  { title: "Online customer service", icon: Headphones },
  { title: "Subscription", icon: Newspaper },
  { title: "Help center", icon: HelpCircle },
  { title: "Mining by lock up", icon: Wallet },
  { title: "Recharge", icon: DollarSign },
  { title: "Withdrawal", icon: ArrowDownCircle },
  { title: "I want to share", icon: Share2 },
];

export default function Feature() {
  return (
    <div className="w-full max-w-1/1 mx-auto p-4 bg-white ">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {features.map(({ title, icon: Icon }, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <Icon className="w-8 h-8 text-blue-500" />
            <span className="text-sm text-gray-700">{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
