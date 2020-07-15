import {combineReducers} from 'redux'
import userReducer from './user/user.redux';
import cartReducer from './cart/cart.redux';

export default combineReducers({
    user:userReducer,
    cart:cartReducer
});