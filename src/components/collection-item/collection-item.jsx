import React from 'react';
import {connect} from 'react-redux';

import {addItem} from '../../redux/cart/cart.actions'

import Button from '../custom-button/custom-button'
import './collection-item.scss';

const CollectionItem=({item,addItem})=>{
    const {imageUrl,name,price}=item;
    return(
    <div className="collection-item">
        <div className="image" 
          style={{backgroundImage:`url(${imageUrl})`}}
        />
        <div className="collection-footer">
            <div className="name">{name}</div>
            <div className="price">{price}</div>
        </div>
        <Button inverted="true" onClick={()=>addItem(item)}>Add To Cart</Button>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  });
export default connect(null,mapDispatchToProps)(CollectionItem);
