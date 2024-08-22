

import CartItem from './Pages/CartItem';
import './App.css';
import { ShoppingCartProvider, useShoppingCart } from './Pages/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
        <ShoppingBag />  
      <Cart />
    </ShoppingCartProvider>
    
  );
}

function ShoppingBag(){
  const { items, total } = useShoppingCart();

  return(
   <div className='shopping-bag'>
     <div>Shopping Bag ({items})</div>
     <div>Total Price : {total}</div>
   </div>
  );

}


function Cart(){

  return(
<div className='cart'>
     <CartItem imageURL="https://static.zara.net/assets/public/b988/2a0f/d56849bf9b00/616ff9ac29f3/00304300800-e1/00304300800-e1.jpg?ts=1702308091046&w=496&h=496&fmt=auto"
         itemName="VISCOSE BLEND SWEATER"
         oldPrice="5400.00"
         newPrice="-43% ₹4499.00"
      />

      <CartItem imageURL="https://static.zara.net/assets/public/8b1b/0aa2/da94471095a6/3fd6c540a6de/4000.jpg?ts=1690811259632&w=496&h=496&fmt=auto"
         itemName="SHIRT WITH FLORAL"
         oldPrice="4400.00"
         newPrice="-43% ₹3499.00"
      />
       <CartItem imageURL="https://static.zara.net/assets/public/fe1f/4435/e03a4d71990d/8a983a1a097e/1689257032458/1689257032458.jpg?ts=1701338170569&w=496&h=496&fmt=auto"
         itemName="HOODED TECHNICAL JACKET"
         oldPrice="5900.00"
         newPrice="-43% ₹4899.00"
      />
       <CartItem imageURL="https://static.zara.net/assets/public/d07c/cdb9/01034f059413/55e6b8efa4b4/05575471400-e1/05575471400-e1.jpg?ts=1707295832894&w=496&h=496&fmt=auto"
         itemName="VISCOSE BLEND SWEATER"
         oldPrice="3700.00"
         newPrice="-43% ₹2499.00"
      />
       <CartItem imageURL="https://static.zara.net/assets/public/6cdd/cbbe/5dee4669b034/1a7f4195cba0/12268320202-e1/12268320202-e1.jpg?ts=1703759775886&w=496&h=496&fmt=auto"
         itemName="VISCOSE BLEND SWEATER"
         oldPrice="5999.00"
         newPrice="-43% ₹4099.00"
      />
       <CartItem imageURL="https://static.zara.net/assets/public/f468/2ad6/17fb4b1a9c8e/97bd19ff6448/13127320500-e1/13127320500-e1.jpg?ts=1709656397098&w=496&h=496&fmt=auto"
         itemName="VISCOSE BLEND SWEATER"
         oldPrice="2000.00"
         newPrice="-43% ₹1899.00"
      />
    </div>
  )
}


export default App;
