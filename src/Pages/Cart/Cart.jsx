import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "./../../Context/StoreContext";
import { Navigate, useNavigate } from "react-router-dom";
const Cart = () => {

  const navigate = useNavigate();
  const { cartItems, food_list, removeFromCart,getTotalCartAmount,url } = useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>

                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>{getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee </p>
            <p>{getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <p>{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
          </div>
          <button onClick={()=>navigate("/order")} className="button">PROCEED TO CHECKOUT</button>
        </div>
        
        <div className="cart-promocode">
        <div>
          <p>If you have promo code , Enter is here</p>
          <div className="cart-promocode-input">
            <input className="input" type="text" placeholder="Promocode"/>
            <button className="animated-button">Submit</button>
          </div>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default Cart;
