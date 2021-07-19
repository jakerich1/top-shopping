import React from "react";
import bg from './spacex3.jpg';
import './Basket.scss'
import BasketItem from "./BasketItem/BasketItem";

function Basket(props) {

    const listItems = props.basket.map((item, index) => {
        let productIndex = props.products.findIndex(product => product.id === item.id)
        let productItem = props.products[productIndex]
        return <BasketItem 
                key={index}
                id={item.id}
                changeBasket={props.changeBasket}
                title={productItem.title}
                price={productItem.price}
                total={item.total}
                quantity={item.quant}
                url={productItem.url}
                removeItem={props.removeItem}
            />
    });

    const handleBasket = () => {
        alert('Ready to check out')
    }

  return (
    <section className='basket-page' style={{backgroundImage: `url(${bg})`}}>
     <div className='shop-box'>
        <div className='top'>
            <h2>Basket</h2>
            <button onClick={handleBasket}>Check Out</button>
        </div>
        <div className='order-total'>Order Total: {Number((props.total).toFixed(2))}</div>
        {listItems}
     </div>
    </section>
  );
}

export default Basket;
