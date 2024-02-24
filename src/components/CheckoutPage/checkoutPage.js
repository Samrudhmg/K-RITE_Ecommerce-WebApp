import React from 'react'
import './checkoutPage.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { getAllCarts } from '../../store/cartSlice';
import { formatPrice } from '../../utils/helpers';

const CheckoutPage = () => {

  const carts = useSelector(getAllCarts);
  const { itemsCount, totalAmount} = useSelector((state) => state.cart);
  return (
    <div className='main'>
      <h1>Checkout</h1>
    <div class="contain">
      {/* <div className='shoplist'><CheckoutModal carts={carts}/></div> */}
      <div class="shoplist">
        <div class="itemlist">
          
            {
              carts.map((carts)=>{
                return(
                <div class="item" key = {carts.id}>
                <img class="item__image" src={carts?.thumbnail} alt='nothingtoshow' />
                <div class="item__info">
                  <p class="item__title">{carts.title}</p>
                  <div class="item__prices">
                    <span class="item__price"> {formatPrice(carts?.discountedPrice)}</span>
                    <h5> quantity: {carts?.quantity}</h5>
                  </div>
                 
                  <div class="item__number">
                   
                  </div>
                </div>
              </div>
                )
              })
            }
          
        </div>

        <div class="shoplist__row">
          <p class="shoplist__title">Total Items</p>
          <p class="shoplist__price"> {itemsCount}</p>
        </div>
        <div class="shoplist__row">
          <p class="shoplist__title">Total Price</p>
          <p class="shoplist__price">{formatPrice(totalAmount)}</p>
        </div>
      </div>
      <form class="form" action="#">
        <h2>Contact information</h2>
        <div class="input-group">
          <label class="label" for="email">E-mail</label>
          <br />
          <div class="input">
            <i class="fas fa-envelope"></i>
            <input id="email" type="text" placeholder="Enter your email..." />
          </div>
        </div>
        <div class="input-group">
          <label class="label" for="phone">Phone</label>
          <br />
          <div class="input">
            <i class="fas fa-phone-alt"></i>
            <input id="phone" type="text" placeholder="Enter your phone..." />
          </div>
        </div>
        <h2>Shipping address</h2>
        <div class="input-group">
          <label class="label" for="email">Full name</label>
          <br />
          <div class="input">
            <i class="fas fa-user-circle"></i>
            <input id="email" type="text"  />
          </div>
        </div>
        <div class="input-group">
          <label class="label" for="email">Adress</label>
          <br />
          <div class="input">
            <i class="fas fa-home"></i>
            <input id="email" type="text" placeholder="Your address..." />
          </div>
        </div>
        <div class="input-group">
          <label class="label" for="email">City</label>
          <br />
          <div class="input">
            <i class="fas fa-building"></i>
            <input id="email" type="text" placeholder="Your city..." />
          </div>
        </div>
        <div class="input-group flex">
          <div class="input-left">
            <label class="label" for="email">Country</label>
            <br />
            <div class="input">
              <i class="fas fa-globe-americas"></i>
              <input id="email" type="text" placeholder="Your country..." />
            </div>
          </div>
          <div class="input-right">
            <label class="label" for="email">Postal code</label>
            <br />
            <div class="input">
              <i class="fas fa-inbox"></i>
              <input id="email" type="text" placeholder="Your postal code..." />
            </div>
          </div>
        </div>

        <div class="flex items-center mx-4">
          <input
            type="checkbox"
            name="save-information"
            id="save-information"
          />
          <span>
            Save this information for next time
          </span>
        </div>
       <Link to='/finish'> <button class="btn">Place Order</button></Link>
      </form>
    </div>
    </div>

  )
}

export default CheckoutPage