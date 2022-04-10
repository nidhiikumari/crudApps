import React,{useState} from 'react';
import data from './Data';
import Product from './Product';
import Cart from './Cart';
import {
  Routes,
  Route,
  Switch
} from "react-router-dom";
import Registration from '../Component/Registration';
import Login from '../Component/Login';
import Dashboard from '../Component/Dashboard';

function Main() {

  // const[drive, setDrive] =useState(null)
  const { productItems } = data;
 
  
  return (
    <div className=''>
      <Switch>
      <Route path='/' exact >
          <Registration />
        </Route>
        <Route path='/Products' exact >
          <Product productItems={productItems}/>
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/cart' exact>
          <Cart />
        </Route>
        <Route path='/dashboard' exact>
          <Dashboard />
        </Route>
      </Switch>

    </div>
  )
}
export default Main