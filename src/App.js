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
      <Route path="/MyStore/" element={<Navigation />} >
        <Route index element={<Mytable />} />
        <Route path="/MyStore/item/:id" element={<SingleProduct />} />
        <Route path="/MyStore/EnterInfo" element={<EnterInfo />} />
        <Route path="/MyStore/FinalScreen" element={<FinalScreen />} />
        <Route path="/MyStore/Cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/MyStore/" replace />} />
      </Route>
    </Routes>
  );
}

export default observer(App)