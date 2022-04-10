import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {remove, add, increase, DCRSE} from '../Redux/Actions/Action';
import './Cart.css';
import Product from './Product';

function Cart({cart, dispatch}) {
  // const cart = useSelector((state) => state);
  console.log(cart);
  // const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  }
  const total = cart.reduce(addition, 0);
  return (
    <div className='cart-item'>
      <h2 className='cart-items-header'>
        Cart Items
      </h2>
      <div className='clear-cart'>
        {cart.length >= 1 && (
          <button className='clear-cart-button' >Clear Cart</button>
        )}
      </div>
      {cart.length === 0 && (<div className='cart-itmes-empty'>No Items are added</div>)}
      <div>
        {cart.map((item) => {
          return (
            <div key={item.id} className="cart-items-list">
              <img className='cart-items-image' src={item.image} alt={item.name} />
              <div className='cart-items-name'>
                {item.name}
              </div>
              <div className='cart-items-functions'>
                <button className='cart-items-add' onClick={() => dispatch({ type: "INCRSE", payload: item})} >+</button>
                <button className='cart-items-remove' onClick={() => dispatch({ type: "DCRSE", payload:item})}>-</button>
              </div>
              <div className='cart-items-price'>
                {item.quantity} * ${item.price}
              </div>
            </div>
          );
        })}
      </div>
      <div className='cart-items-total-price-name'>
        Total Price
        <div className='cart-items-total-price'>${total}</div>
      </div>
    </div>

  )
}
export default Cart