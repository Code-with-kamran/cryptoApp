import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mobilebar from "./components/Mobilebar";
import ImageCarousel from "./components/ImageCarousel";
import News from "./components/News";
import Price from "./components/Price";
import Features from "./components/Feature";
import Tradeview from "./components/Tradeview";
import Market from './pages/Market'
import Assets from './pages/Assets'
import Transaction from './pages/Transaction'
import Me from './pages/Me'
import LanguageSwitch from "./pages/LanguageSwitch";
import SwitchLines from './pages/SwitchLines'
import LoginForm from "./components/Loginform";
import SecondContract from "./pages/SecondContract";
import SignUp from './pages/SignUp'

function Home() {
  return (
    <div className="">
      <ImageCarousel />
      <News />
      <Price />
      <Features />
      <Tradeview />
    </div>
  );
}




export default function App() {
  return (
    <BrowserRouter basename="/cryptoApp" >
      <div style={{ paddingBottom: "70px" }}>
        <Routes>
          <Route path="/cryptoApp" element={<Home />} />
          <Route path="/markets" element={<Market />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/switchlanguage" element={<LanguageSwitch />} />
          <Route path="/switchline" element={<SwitchLines />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/secondcontract" element={<SecondContract />} />
          <Route path="/signup" element={<SignUp />} />
         
          <Route path="/me" element={<Me />} />
        </Routes>
      </div>

      <Mobilebar />
    </BrowserRouter>
  );
}

