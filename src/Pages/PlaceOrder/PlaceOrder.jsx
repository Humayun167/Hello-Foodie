import { useContext } from 'react';
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext';

const PlaceOrder = () => {
    const{getTotalCartAmount} = useContext(StoreContext);
    return (
        <form className='place-order'>
            <div className="place-order-left">
              <p className="title">Delivery Information</p>
              <div className="multi-fields">
                <input type="text" placeholder='First Name' />
                <input type="text"  placeholder='Last Name'/>
              </div>
              <input type="email" placeholder='Email' />
              <input type="text" placeholder='Street'/>
              <div className="multi-fields">
                <input type="text" placeholder='City' />
                <input type="text"  placeholder='State'/>
              </div>
              <div className="multi-fields">
                <input type="text" placeholder='Zip code ' />
                <input type="text"  placeholder='COuntry'/>
              </div>
              <input type="text" placeholder='Phone' />
            </div>
            <div className="place-order-right">
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
          <button className="button">PROCEED TO Payment</button>
        </div>
            </div>
        </form>
    );
};

export default PlaceOrder;