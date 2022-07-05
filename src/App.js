import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Mytable from './mytable';
import EnterInfo from './EnterInfo';
import FinalScreen from './finalScreen';
import SingleProduct from './SingleProduct';
import Navigation from './navigation';
import Cart from './Cart';
import { Routes, Route, Outlet, NavLink, Navigate, Link } from "react-router-dom";
import { observer } from 'mobx-react-lite'
//http://faceprog.ru/reactcourseapi/products/all.php

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Mytable />} />
        <Route path="/item/:id" element={<SingleProduct />} />
        <Route path="EnterInfo" element={<EnterInfo />} />
        <Route path="FinalScreen" element={<FinalScreen />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default observer(App)