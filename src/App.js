import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import TransactionList from './components/TransactionList'

function App(){
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={TransactionList} />
        </Routes>
    </BrowserRouter>  
)
}

export default App