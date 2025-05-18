import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Market from "./pages/Market";
import Assets from "./pages/Assets";
import Transaction from "./pages/Transaction";
import Me from "./pages/Me";
import LanguageSwitch from "./pages/LanguageSwitch";
import SwitchLines from "./pages/SwitchLines";
import LoginForm from "./components/Loginform";
import SecondContract from "./pages/SecondContract";
import SignUp from "./pages/SignUp";
import Mobilebar from "./components/Mobilebar";
import Certificate from './pages/Certificate'
import Identification from './pages/Identification'
import Collection from './pages/Collection'
import CollMethod from './pages/CollMethod'
import CustomerServices from './pages/CustomerServices'
import ChangeRecord from './pages/ChangedRecord'
import ContractPosition from './pages/ContractPosition'
import RapidPosition from './pages/RapidPosition'
import Share from './pages/Share'
import Wallet from "./pages/Wallet";

export default function App() {
  return (
    <>

      <Router>
      
          <Routes basename="/cryptoApp/">
            <Route path="/" element={<Home />} />
            <Route path="/markets" element={<Market />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/switchlanguage" element={<LanguageSwitch />} />
            <Route path="/switchline" element={<SwitchLines />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/secondcontract" element={<SecondContract />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/identification" element={<Identification />} />
            <Route path="/share" element={<Share />} />

            <Route path="/collection" element={<Collection />} />
            <Route path="/collmethod" element={<CollMethod />} />
            <Route path="/costomerservice" element={<CustomerServices />} />
            <Route path="/changerecord" element={<ChangeRecord />} />
            <Route path="/contractposition" element={<ContractPosition />} />
            <Route path="/rapicposition" element={<RapidPosition />} />

            <Route path="/me" element={<Me />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
          
        <Mobilebar />
      </Router>
    </>
  );
}
