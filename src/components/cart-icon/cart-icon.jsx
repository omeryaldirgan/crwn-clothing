import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import {ReactComponent as Icon} from '../../assets/shopping-bag.svg';
import {createStructuredSelector} from 'reselect'
import './cart-icon.scss'
const CartItem=({toggleCartHidden,itemCount})=>(
   <div className="cart-icon" onClick={toggleCartHidden}>
       <Icon className="shopping-icon"/>
       <span className="item-count">{itemCount}</span>
   </div>
)
/*
const mapStateToProps=state=>({
  itemCount:selectCartItemsCount(state)
})
*/
const mapStateToProps=createStructuredSelector({
  itemCount:selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps,mapDispatchToProps)(CartItem)