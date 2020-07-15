import CartActionTypes from './cart.types'

import { addItemToCart } from './cart.utils';

const INITIAL_STATE={
    hidden:false,
    cartItems:[]
}
const cartReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case CartActionTypes.TOOGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
            break;
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                //cartItems:[...state.cartItems,action.payload],
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
            break;
        default:
            return state;
            break;
    }
}

export default cartReducer;