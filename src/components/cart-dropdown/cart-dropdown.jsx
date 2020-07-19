import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import Button from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-item'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {createStructuredSelector} from 'reselect'
import './cart-dropdown.scss'
const CartDropdown=({cartItems,history,dispatch})=>(
   <div className="cart-dropdown">
       <div className="cart-items ">
          {
            cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
            ):(
                <span className='empty-cart'>Cart is empty</span>
            )
          }
       </div>
       <Button onClick={()=>{history.push('/checkout');dispatch(toggleCartHidden())}}>Check Out</Button>
   </div>
)

/*const mapStateToProps=({cart:{cartItems}})=>({
    cartItems
})*/
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown))