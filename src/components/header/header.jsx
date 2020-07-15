import React from 'react';
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/logo.svg';
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux';
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
/*
const mapStateToProps=(state)=>(
    {
        currentUser:state.user.currentUser
    }
)*/
const mapStateToProps=({user:{currentUser},cart:{hidden}})=>(
    {
        currentUser,
        hidden
    }
)
export default connect(mapStateToProps)(Header);
