const Reducer = (cart=[], action)=> {
  if(action.type=== "ADD") {
      let tempCart = cart.filter((item) => item.id === action.payload.id)
      if(tempCart < 1) {
          return [...cart, action.payload]
      }
      else{
          return cart;
      }
  }
  if(action.type === 'REMOVE'){
      return cart.filter((item) => item.id !== action.payload.id)
  }
  if(action.type === "INCRSE"){
      let incresebtn = cart.map((item)=> {
          if(item.id === action.payload.id){
              return {...item, quantity: item.quantity+1}
          }
          return item;   
      })
      return incresebtn;
  }
  if(action.type === "DCRSE"){
      let decrsbtn = cart.map((item)=> {
          if(item.id=== action.payload.id){
              return {...item, quantity: item.quantity-1}     
          } 
          return item;     
      })
      return decrsbtn ;
  }
  return cart;
}
export default Reducer;