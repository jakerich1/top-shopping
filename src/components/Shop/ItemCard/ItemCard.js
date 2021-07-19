import React from "react";
import hat from '../hat.png'

function ItemCard(props) {
  return (
    <div className='item-card'>
        <img src={hat} alt='item'/>
        <div className='product-detais'>
            <p className='product-title'>{props.title}</p>
            <p className='product-price'>{props.price}</p>
        </div>
    </div>
  );
}

export default ItemCard;
