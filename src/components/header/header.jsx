import React from 'react';
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/logo.svg';
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux';
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'
import './header.scss'

const Header=({currentUser,hidden})=>{
    return(
        <div className="header">
            <Link to='/' className='logo-container'>
                <Logo/>
            </Link>
            <div className="options">
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                {
                    currentUser
                    ?
                    <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signIn'>SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {
                hidden && <CartDropdown/>
            }
            
        </div>
    )
}
/*  1
const mapStateToProps=(state)=>(
    {
        currentUser:state.user.currentUser
    }
)*/
/*  2
const mapStateToProps=({user:{currentUser},cart:{hidden}})=>(
    {
        currentUser,
        hidden
    }
)*/
/* 3
const mapStateToProps=(state)=>(
{
    currentUser:selectCurrentUser(state),
    hidden:selectCartHidden(state)
})*/
const mapStateToProps=createStructuredSelector({
        currentUser:selectCurrentUser,
        hidden:selectCartHidden
})
export default connect(mapStateToProps)(Header);
