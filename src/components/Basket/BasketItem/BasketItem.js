import React from "react";
import './BasketItem.scss'

function BasketItem(props) {

  return (
    <div className='basket-item'>
        <img src={props.url} alt={props.title}/>
        <div className='item-details'>
            <div className='item-title'>{props.title}</div>
            <div className='item-pricing'>{props.price} x {props.quantity} = Total = {Number((props.total).toFixed(2))}</div>
            <div className='quantity'>
                <button onClick={() => props.changeBasket(props.id, 1)} className='quant-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevrons-up" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="7 11 12 6 17 11" />
                        <polyline points="7 17 12 12 17 17" />
                    </svg>
                </button>
                <div className='quant-amount'>{props.quantity}</div>
                <button onClick={() => props.quantity === 1 ? undefined : props.changeBasket(props.id, -1)} className='quant-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevrons-down" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="7 7 12 12 17 7" />
                        <polyline points="7 13 12 18 17 13" />
                    </svg>
                </button>
            </div>
            <button onClick={() => {props.removeItem(props.id)}} className='remove'>Remove from basket</button>
        </div>
    </div>
  );
}

export default BasketItem;
