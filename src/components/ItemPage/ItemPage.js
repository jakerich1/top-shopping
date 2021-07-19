import React, { useState, useEffect } from "react";
import {
  useParams
} from "react-router-dom";
import bg from './spacexbg.jpg';
import './ItemPage.scss'
import { Link } from "react-router-dom";

function ItemPage(props) {
  
  let { id } = useParams();
  let index = props.products.map(item => item.id).indexOf(id)
  let item = props.products[index]
  
  const [total, setTotal] = useState(0);
  const [quant, setQuant] = useState(1);

  //update total price for item based on the quantity * item price
  useEffect(() => {
      const totalPrice = Number((quant*item.price).toFixed(2))
      setTotal(totalPrice)
  }, [quant, item.price]);

  const increaseQuant = () => {
      setQuant(quant + 1)
  }

  const decreaseQuant = () => {
    if (quant !== 1) {
        setQuant(quant - 1)
    }
  }

  return (
    <section className='item-page' style={{ 
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.73)), url(${bg})` 
    }}>
        <div className='shop-box'>
            <div className='image'>
                <img src={item.url} alt={item.title} />
            </div>
            <div className='details'>
                <Link to={'/shop'}>
                    <button className='outline'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevrons-left" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <polyline points="11 7 6 12 11 17" />
                            <polyline points="17 7 12 12 17 17" />
                        </svg>
                        BACK TO SHOP
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevrons-left" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <polyline points="11 7 6 12 11 17" />
                            <polyline points="17 7 12 12 17 17" />
                        </svg>
                    </button>
                </Link>
                <h1>{item.title}</h1>
                <p className='item-detail'>{item.desc}</p>
                <div className='quantity'>
                    <button onClick={increaseQuant} className='quant-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevrons-up" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <polyline points="7 11 12 6 17 11" />
                            <polyline points="7 17 12 12 17 17" />
                        </svg>
                    </button>
                    <div className='quant-amount'>{quant}</div>
                    <button onClick={decreaseQuant} className='quant-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevrons-down" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <polyline points="7 7 12 12 17 7" />
                            <polyline points="7 13 12 18 17 13" />
                        </svg>
                    </button>
                </div>
                <p>£{quant < 1 ? item.price : total}</p>
                <button onClick={() => props.addToBasket(total, quant, item.price, id)}>ADD TO BASKET</button>
            </div>
        </div>
    </section>
  );
}

export default ItemPage;
