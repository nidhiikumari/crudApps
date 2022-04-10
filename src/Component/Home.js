import React from 'react';
import{   
  Redirect,
  Route,
  Switch ,
  Link 
} from "react-router-dom";
import './Home.css';


function Home() {
  return (
    <header className='header'>
        <div>
            <h1>
                <Link to='/' className='logo'>
                    React Task
                    </Link>
            </h1>
        </div>
        <div className='header-links'>
            <ul>
                <li>
                    <Link to="/" className=''>
                        Create Account
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/Products" className=''>
                      ADD PRODUCT
                    
                      {/* <span className='cart-length'>{cartItems.length === 0 ? "" : cartItems.length}</span> */}
                    </Link>
                </li>
            </ul>
            </div>
            </header>
  );
}
export default Home;