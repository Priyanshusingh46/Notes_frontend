import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import App from './App';
import FormPage from "./Form"
import UpdateNote from './UpdateNote';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>}></Route>
    <Route path="/addnote" element={<FormPage/>}></Route>
    <Route path="/updatenote/:id" element={<UpdateNote/>}></Route>
    </Routes>
  </BrowserRouter>
);

