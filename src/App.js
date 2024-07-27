import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import TransactionList from './components/TransactionList'
import AddTransaction from "./components/AddTranscation";

function App(){
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={TransactionList} />
          <Route path="/add" Component={AddTransaction} />
        </Routes>
    </BrowserRouter>  
)
}

export default App