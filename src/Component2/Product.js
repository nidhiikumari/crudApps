import React from "react";
import './Product.css';
import { useSelector, useDispatch } from 'react-redux';
import Cart from "./Cart";
import{   
 
  Route,
  Switch  
} from "react-router-dom";




function Product({productItems}) {
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  }
  const total = cart.reduce(addition, 0);
  return (
    <>
    <div className='products'>
      {
        productItems.map((productItem) => {
          return (
            <div className='card'>
              <div>
                <img src={productItem.image} alt={productItem.name} className='product-img' />
              </div>
              <div>
                <h3 className='product-name'>{productItem.name}</h3>
              </div>
              <div className='product-price'>
                Price: ${productItem.price}
              </div>
              <div>
                <button className='product-add-button' onClick={() => dispatch({ type: "ADD", payload: productItem })}>Add To Cart</button>
              </div>
            </div>
          )
        })
      }
    </div>
    <div className='cart-item'>
      <h2 className='cart-items-header'>
        Cart Items
      </h2>
      
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
             
              <button className='cart-items-allremove' onClick={() => dispatch({ type: "REMOVE", payload: item})} >Remove</button>
              
            </div>
          );
        })}
      </div>
      <div className='cart-items-total-price-name'>
        Total Price
        <div className='cart-items-total-price'>${total}</div>
      </div>
    </div>

    </>
    
  )
}
export default Product