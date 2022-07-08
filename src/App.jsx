/* eslint-disable no-unused-vars */
import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />  {/* This will always be visible i.e. upon navigating through websites. */}
        <Routes>  {/* Anything inside Routes will  always change.*/}
          <Route path="/" element={<Home />}/>
          <Route path="/detail" element={<Detail />}/>
          <Route path="/login" element = {<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
