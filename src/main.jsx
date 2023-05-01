import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./components/layout";
import App from "./App";
import Clock from './tasks/clock'
import Counter from './tasks/counter'
import Login from './tasks/login'
import "./Global.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />}/>
        <Route path="/clock" element={<Clock />}/>
        <Route path="/counter" element={<Counter />}/>
        <Route path="/login" element={<Login />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
