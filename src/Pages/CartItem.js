
import { useState } from 'react';
import { useShoppingCart } from './ShoppingCartContext';
import './CarItem.css'
// import item1 from 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkyd7kUh-BhI4DmnhuJg3pl87AMZRbiMYdbg&s';
export default function CartItem({imageURL, itemName, oldPrice, newPrice}){
   const [isCart, setCartItem] = useState(false);
   const { addToCart } = useShoppingCart();

    function isInCart(){
      setCartItem(()=>!isCart);
      addToCart(Number(oldPrice), !isCart )
      console.log(!isCart)
    }
  return(
    <div className='cart-item'>
       <img
        src={imageURL}
        alt="img"
        class="img"
      /> <div className='desc-grp'><div className='item-name'>
             {itemName}
        </div>
        <div className='price'>
          <spa className="old">&#x20b9; {oldPrice}</spa>
          <span className="new">{newPrice}</span>
        </div>

        <div className='btn-grp'>
        <button  className='btn' onClick={isInCart} > {isCart ?  "Remove" : "+ Add to Cart"}</button>
        </div>
        </div>
    </div>
  );
}




